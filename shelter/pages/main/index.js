const pets = await fetch("../../assets/data/pets.json")
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    const dta = data;
    return dta;
  })
  .catch((error) => console.log(error));
console.log(pets);

//*--------VARIABLES---- *//
const BTN_BURGER = document.querySelector(".burger__menu");
const navigation = document.querySelector(".header__navigation");
const listNav = document.querySelector(".nav__list");

function check() {
  if (window.matchMedia("(min-width: 767px)").matches) {
    navigation.classList.add("header__navigation-hidden");
    listNav.classList.add("nav__list-active");
  } else {
    navigation.classList.remove("header__navigation-hidden");
  }
}
function clickedBurger() {
  BTN_BURGER.classList.toggle("burger__menu-turn");
  console.log("click");
  if (BTN_BURGER.classList.contains("burger__menu-turn")) {
    navigation.classList.remove("header__navigation-hidden");
    navigation.classList.add("header__navigation-active");
    listNav.classList.add("nav__list-active");
  } else {
    navigation.classList.remove("header__navigation-active");
    navigation.classList.add("header__navigation-hidden");
  }
}

check();
window.addEventListener("resize", check);
BTN_BURGER.addEventListener("click", clickedBurger);

//***************************************************/

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
                ><span class="pet-list__item-data">${pets.inoculations.join(
                  " ",
                )}</span>
              </li>
              <li class="pet-list__item">
                <span class="list__item-text pet-diseases">Diseases:&nbsp</span
                ><span class="pet-list__item-data">${pets.diseases.join(
                  " ",
                )}</span>
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
console.log(pets[2].inoculations.join(" "));

//********Carousel******//

const btnSliderArray = document.querySelectorAll(".button-slider");

btnSliderArray.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const click = event.target;
    if (click.classList.contains("pets__button-left")){console.log(click);}
  });
});

function moveCard(event) {
  
}
