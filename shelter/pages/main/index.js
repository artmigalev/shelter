import { nextBtn, handle, loadedCards, prevBtn, returnedCountCards } from "../../js/infinite-slider-carousel.js";
import { createdMenuBurger, clickedBurger, BTN_BURGER } from "../../js/burger.js";
import { showModalToClickedCard,closemodal } from "../../js/modal-window.js";

//*____________________________________________________//

export const pets = await fetch("../../assets/data/pets.json")
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    const dta = data;
    return dta;
  })
  .catch((error) => console.log(error));


if (document.readyState == "complete") createdMenuBurger();
BTN_BURGER.addEventListener("click", clickedBurger);

loadedCards(); // added pet cards to dom

window.addEventListener("resize", () => {
  document.querySelector(".block-card__slider").innerHTML = "";
  loadedCards();
  console.log(returnedCountCards(document.querySelector(".block-card__slider").parentNode));
}); // changes the number of cards when changing the size of the window
nextBtn.addEventListener("click", handle);
prevBtn.addEventListener("click", handle);
//* when clicked to card ---------------------------------------------------------------------------------
document.body.querySelectorAll(".pets__card").forEach((card) => {
  card.addEventListener("click", showModalToClickedCard);
});





