import {
  loadedCards,
  nextBtn,
  
  handle,
} from "../../js/infinite-slider-carousel.js";

export const pets = await fetch("../../assets/data/pets.json")
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    const dta = data;
    return dta;
  })
  .catch((error) => console.log(error));
console.log(pets);

//*--------VARIABLES-------*//

const MENU_BURGER = document.querySelector(".nav__list");
const BTN_BURGER = document.querySelector(".burger-btn");
const HEADER = document.querySelector(".header");
/!!----------BURGER MENU AND BURGER-BTN CLICKED-----!!/;

//*--------ADDED BURGER MENU INTO DOM -------*//

if (document.readyState == "complete") createdMenuBurger();
BTN_BURGER.addEventListener("click", clickedBurger);

loadedCards(); // added pet cards to dom
window.addEventListener("resize", loadedCards); // changes the number of cards when changing the size of the window
nextBtn.addEventListener("click", handle);

function createdMenuBurger() {
  let menuBg = document.createElement("div");
  menuBg.className = "burger__menu-bg";
  document.querySelector(".header").appendChild(menuBg);
  let clone = MENU_BURGER.cloneNode(true);
  menuBg.appendChild(clone);
}

function clickedBurger() {
  BTN_BURGER.classList.toggle("burger-btn-turn");
  console.log("click");
  const burgerMenu = document.querySelector(".burger__menu-bg");
  if (BTN_BURGER.classList.contains("burger-btn-turn")) {
    burgerMenu.classList.remove("burger__menu-bg-hidden");
    burgerMenu.classList.add("burger__menu-bg-visibility");
    // listNav.classList.add("nav__list-active");
  } else {
    burgerMenu.classList.remove("burger__menu-bg-visibility");
    burgerMenu.classList.add("burger__menu-bg-hidden");
  }
}

//!----------------Infinite slider carousel on Main page--------/

//!! ------------MODAL------------------!!//

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
createdModalWindow(pets[2]);
