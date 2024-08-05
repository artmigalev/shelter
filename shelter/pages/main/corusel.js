const pets = await fetch("../../assets/data/pets.json")
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    const dta = data;
    return dta;
  })
  .catch((error) => console.log(error));

const buttonsArray = document.querySelectorAll("button-slider");
const blockCard = document.querySelector(".pets__block-card");

function addCardToBody(srcAdd, card) {
  const cardBody = `<div class="pets__card" id="card__${card.name.toLowerCase()}">
              <img
                class="card__img"
                src=${card.img}
                alt=${card.name} />
              <span class="card__name">${card.name}</span>
              <button class="card__btn">Learn more</button>
            </div>`;
  srcAdd.insertAdjacentHTML("beforeend", cardBody);
}
pets.forEach((card) => addCardToBody(blockCard, card));

const btnSliderArray = document.querySelectorAll(".button-slider");

btnSliderArray.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const click = event.target;
    if (click.classList.contains("pets__button-right")) {
      console.log(click);
      document.querySelectorAll(".pets__card").forEach((element) => {
        element.classList.add("move-right");
      });
      element.classList.remove("move-right");
    }else if (click.classList.contains("pets__button-left")){
       document.querySelectorAll(".pets__card").forEach((element) => {
         element.classList.add("move-left");
       });
    }
  });
});
