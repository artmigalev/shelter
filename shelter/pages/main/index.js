import pets from "../../assets/data/pets.json" with {type:"json"};
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
    listNav.classList.remove("nav__list-active");
    navigation.classList.add("header__navigation-hidden");
  }
}

check();
window.addEventListener("resize", check);
BTN_BURGER.addEventListener("click", clickedBurger);
const petsObj = pets[0]

function createdCard(petsObj){

  console.log(petsObj);
  let popup = document.createElement('dialog')
  popup.className = 'popup-main'
  let btnClosePopup = document.createElement('button')
  btnClosePopup.className = 'button-slider'
  popup.appendChild(btnClosePopup)
  let popupContainer = document.createElement('div')
  popupContainer.className = 'popup-container'
  popup.appendChild(popupContainer)
  let imgCard = document.createElement('img')
  imgCard.src = petsObj.img
  imgCard.alt = petsObj.name.toLowerCase()
  popupContainer.appendChild(imgCard)

  let contentContainer = document.createElement('div')
  contentContainer.className = 'content-container'
  contentContainer.innerHTML =`
    <h3 class="title__card">${petsObj.name}</h3>
    <span class="typeBreed__card">${petsObj.type} - ${petsObj.breed}</span>
    <p class="description__card">${petsObj.description}</p>
    <ul class="list__card">
      <li class='list'>Age: <span class = "age-pets__card">${petsObj.age}</span></li>
      <li class='list'>Inoculations: <span class = "inoculation-pets__card">${petsObj.inoculations}</span></li>
      <li class="list">Diseases: <span class = "diseases-pets__card" >${petsObj.inoculations}</span></li>
      <li class="list"><span class = "parasites-pets__card">${petsObj.inoculations}</span></li>
    </ul>`
  popupContainer.appendChild(contentContainer)
  document.body.appendChild(popup)

}
createdCard()

console.log(content);


