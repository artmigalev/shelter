import { nextBtn, handle, loadedCards, prevBtn } from "../../js/infinite-slider-carousel.js";
import { createdMenuBurger,clickedBurger,BTN_BURGER } from "../../js/burger.js";
import { getModalWindow } from "../../js/modal-window.js";


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
console.log(pets);








if (document.readyState == "complete") createdMenuBurger();
BTN_BURGER.addEventListener("click", clickedBurger);



loadedCards(); // added pet cards to dom
getModalWindow(pets[1]).showModal()
window.addEventListener("resize", () => {
  document.querySelector(".block-card__slider").innerHTML = "";
  loadedCards();
  console.log(document.querySelector(".slide"));
}); // changes the number of cards when changing the size of the window
nextBtn.addEventListener("click", handle);
prevBtn.addEventListener("click", handle);







