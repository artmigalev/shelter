import { nextBtn, handle, loadedCards, prevBtn, returnedCountCards } from "../../js/infinite-slider-carousel.js";
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

console.log('dasda');








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





document.body.querySelectorAll(".pets__card").forEach((card) => {


  card.addEventListener("click", showModalToClickedCard);

});
function showModalToClickedCard (ev)  {
  const click = ev.target;
  let nameCard;
  if (click.classList.contains("card__btn")) {
    this.removeListener("click", showModalToClickedCard);
  } else if (click.closest(".pets__card") && !click.classList.contains("pets__card")) {
    nameCard = click.parentNode.id;
  } else if (click.classList.contains("pets__card")) {
    console.log(click.id);
    nameCard = click.id;
  }
  let clikedCard = pets.find((e) => {
    if (e.name === nameCard) {
      return e;
    }
  });
  getModalWindow(clikedCard).showModal();
  console.log("click card");

  document.body.classList.add("stopScroll");
};

