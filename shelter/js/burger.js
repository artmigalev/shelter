const MENU_BURGER = document.querySelector(".nav__list");
const BTN_BURGER = document.querySelector(".burger-btn");
//*--------ADDED BURGER MENU INTO DOM -------*//
function createdMenuBurger() {
  let menuBg = document.createElement("div");
  menuBg.className = "burger__menu-bg burger__menu-bg-hidden";
  document.querySelector(".header").appendChild(menuBg);
  let clone = MENU_BURGER.cloneNode(true);
  menuBg.appendChild(clone);
}

function clickedBurger() {
  BTN_BURGER.classList.toggle("burger-btn-turn");

  const burgerMenu = document.querySelector(".burger__menu-bg");
  if (BTN_BURGER.classList.contains("burger-btn-turn")) {
    burgerMenu.classList.remove("burger__menu-bg-hidden");
    burgerMenu.classList.add("burger__menu-bg-visibility");

  } else {
    burgerMenu.classList.remove("burger__menu-bg-visibility");
    burgerMenu.classList.add("burger__menu-bg-hidden");
  }
}

export { createdMenuBurger, clickedBurger,MENU_BURGER,BTN_BURGER };
