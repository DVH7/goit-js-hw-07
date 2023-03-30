import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryCards = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCards);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
    </a>
   </li>`;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`)
  instance.show();

  galleryContainer.addEventListener('keydown', (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
