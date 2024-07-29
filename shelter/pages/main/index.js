import pets from "../../assets/data/pets.json" with {"type":"json"};
console.log(
  "Страница Main (60):\n1.Проверка верстки +7\n2.Вёрстка соответствует макету +35\n3.Требования к css +6\n4.Интерактивность элементов +12\n  TOTAL SCORE: 100"
);

//*--------VARIABLES---- *//
const BTN_BURGER = document.querySelector(".burger__menu");
const navigation = document.querySelector(".header__navigation");
const listNav = document.querySelector(".nav__list");

BTN_BURGER.style.display = "flex";

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
const petsObj = pets[0];

// function createdCard(petsObj){

//   console.log(petsObj);
//   let popup = document.createElement('dialog')
//   popup.className = 'popup-main'
//   let btnClosePopup = document.createElement('button')
//   btnClosePopup.className = 'button-slider'
//   popup.appendChild(btnClosePopup)
//   let popupContainer = document.createElement('div')
//   popupContainer.className = 'popup-container'
//   popup.appendChild(popupContainer)
//   let imgCard = document.createElement('img')
//   imgCard.src = petsObj.img
//   imgCard.alt = petsObj.name.toLowerCase()
//   popupContainer.appendChild(imgCard)

//   let contentContainer = document.createElement('div')
//   contentContainer.className = 'content-container'
//   contentContainer.innerHTML =`
//     <h3 class="title__card">${petsObj.name}</h3>
//     <span class="typeBreed__card">${petsObj.type} - ${petsObj.breed}</span>
//     <p class="description__card">${petsObj.description}</p>
//     <ul class="list__card">
//       <li class='list'>Age: <span class = "age-pets__card">${petsObj.age}</span></li>
//       <li class='list'>Inoculations: <span class = "inoculation-pets__card">${petsObj.inoculations}</span></li>
//       <li class="list">Diseases: <span class = "diseases-pets__card" >${petsObj.inoculations}</span></li>
//       <li class="list"><span class = "parasites-pets__card">${petsObj.inoculations}</span></li>
//     </ul>`
//   popupContainer.appendChild(contentContainer)
//   document.body.appendChild(popup)

// }
// createdCard()

// console.log(content);

function createdElements(tag, className, parent, text) {
  let div = document.createElement(tag);
  div.className = className;
  if (text) div.textContent = text;
  parent.appendChild(div);
  return div;
}

function createdPopup(petsObj) {
  let popup = new DocumentFragment();
  let dialog = createdElements("dialog", "pets-dialog", popup);
  let btn = createdElements("button", "button-slider", dialog);
  let container = createdElements("div", "popup-content", dialog);
  let imgPopup = createdElements("img", "img-popup", container);
  imgPopup.src = petsObj.img;
  imgPopup.alt = petsObj.name;
  let content = createdElements("div", "content-popup", container);
  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        createdElements("h3", "name-pert", content, petsObj.name);
        break;
      case 1:
        createdElements('span', "typeBreed-pert", content, `${petsObj.type} - ${petsObj.breed}`)
        break;
      case 2:
        createdElements('p', "description-pert", content, petsObj.description)
        break;
      case 3:
        let listContent = createdElements('ul', 'list-pets',content);

        let age = createdElements('li', "list-age li", listContent )
        createdElements('span', 'text-list',age,petsObj.age)
        let inoculations= createdElements('li', "list-inoculations li", listContent)
        createdElements('span', 'text-list',inoculations,petsObj.inoculations.join(' '))

        let diseases= createdElements('li', "list-diseases li", listContent)
        createdElements('span', 'text-list',diseases,petsObj.diseases.join(' '))


        let parasites=createdElements('li', "list-parasites li", listContent)
        createdElements('span', 'text-list',parasites,petsObj.parasites.join(' '))




    }
  }

  document.body.appendChild(popup);
}
createdPopup(pets[pets.length-1]);

console.log();
