import { galleryItems } from "./gallery-items.js";

const galleryBox = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) =>
  `<div class="gallery__item" style="border-radius:16px">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      style="border-radius:16px"
    />
  </a>
</div>`;
const galleryMarkup = galleryItems.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);

galleryBox.insertAdjacentHTML("beforeend", galleryMarkup);

galleryBox.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imgBigSizesLink = event.target.getAttribute("data-source");
  const modalWindow = basicLightbox.create(`
    <img src="${imgBigSizesLink}" style="border-radius:16px;">
`);
  modalWindow.show();

  document.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    document.querySelector(".basicLightbox");
    if (event.code === "Escape") {
      modalWindow.close();
    }
  }
}
