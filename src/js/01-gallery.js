
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";
// Add imports above this line
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");


const markup = galleryItems.map(({ preview, description, original }) => `<li class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          alt=${description}
        />
      </a>
    </li>`).join("");

gallery.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox(".gallery__item a", {
    captionsData: "alt",
    captionDelay : 250,     
});



