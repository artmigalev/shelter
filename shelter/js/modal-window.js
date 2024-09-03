import { Component, Image, Button } from "./infinite-slider-carousel.js";
const modalWindow = document.querySelector(".modal-window");
async function createdModalWindow(pets) {
  let dialog = `<dialog class="dialog-window">
      <div class="dialog-body">
      <button class="btn__popup-close">&times</button>
        <div class="popup-container">
          <img
            src=${pets.img}
            alt=${pets.name}
            class="img-popup" />
          <div class="popup-content">
            <h3 class="pet-name">${pets.name}</h3>
            <h4 class="pet-typeBreed">${pets.type} - ${pets.breed}</h4>
            <h5 class="pet-description">
              ${pets.description}
            </h5>
            <ul class="pet-list">
              <li class="pet-list__item">
                <span class="list__item-text pet-age">Age:&nbsp</span
                ><span class="pet-list__item-data">${pets.age}</span>
              </li>
              <li class="pet-list__item">
                <span class="list__item-text pet-inoculations"
                  >Inoculations:&nbsp</span
                ><span class="pet-list__item-data">${pets.inoculations.join(" ")}</span>
              </li>
              <li class="pet-list__item">
                <span class="list__item-text pet-diseases">Diseases:&nbsp</span
                ><span class="pet-list__item-data">${pets.diseases.join(" ")}</span>
              </li>
              <li class="pet-list__item">
                <span class="list__item-text pet-parasites"
                  >Parasites:&nbsp</span
                ><span class="pet-list__item-data">${pets.parasites}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </dialog>`;
  return document.body.insertAdjacentHTML("afterbegin", dialog);
}

 function getModalWindow(){
  const dialog = new Component(
    {
      tag: "dialog",
      className: "modal-window",
    },
    new Button({
      className: "button-slider btn-modal",
      text: "&#10006;",
      onClick: () => {
        this.parentNode.close();
      },
    }),
    new Component(
      {
        className: "popup-container",
      },
      new Image({ className: "img-popup",src:'pates.img',alt:'pets.nema '}),
    ),
  );

  return document.body.appendChild( dialog.getNode());

}

export {getModalWindow,modalWindow}