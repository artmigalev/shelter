import { pets } from "../pages/main/index.js";
import { getModalWindow, modalWindow } from "./modal-window.js";
export const slider = document.querySelector(".block-card__slider");
const nextBtn = document.querySelector(".pets__button-right");
const prevBtn = document.querySelector(".pets__button-left");
const offset = slider.parentNode.offsetWidth;
export const lengthCards = returnedCountCards(slider.parentNode);

export class Component {
  node = null;
  #childNode = [];
  constructor({ tag = "div", className = "", text = "", id = "" }, ...childNode) {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    if (id) {
      node.id = id;
    }
    this.node = node;

    if (childNode) {
      this.appendChildren(childNode);
    }
  }

  append(child) {
    this.#childNode.push(child);
    this.node.append(child.getNode());
  }
  appendChildren(childNode) {
    childNode.forEach((el) => {
      this.append(el);
    });
  }
  getNode() {
    return this.node;
  }
  getChild() {
    return this.#childNode;
  }
  setText(content) {
    this.node.textContent = content;
  }
  toggleClass(className) {
    this.node.classList.toggle(className);
  }
  setAttributes(attr, val) {
    this.node.setAttribute(attr, val);
  }
  removeChildren() {
    this.#childNode.forEach((child) => {
      child.destroy();
    });
    this.#childNode.length = 0;
  }
  remove() {
    this.removeChildren();
    this.node.remove();
  }
  addListener(event, listener, options = false) {
    this.node.addEventListener(event, listener, options);
  }
  removeListener(event, listener, options = false) {
    this.node.removeEventListener(event, listener, options);
  }
}
export class Button extends Component {
  constructor({ className, text, onClick }) {
    super({ tag: "button", className, text });
    if (onClick) {
      this.onClick = onClick;
      this.addListener("click", this.onClick);
    }
  }

  destroy() {
    this.removeListener("click", this.onClick);
    super.destroy();
  }
}
export class Image extends Component {
  constructor({ className, src = "", alt = "" }) {
    super({ tag: "img", className, src });
    this.addSrc(src);
    this.setAltText(alt);
  }
  addSrc(src) {
    this.node.src = src;
  }
  setAltText(alt) {
    this.node.alt = alt;
  }
}

export function returnedCountCards(block) {
  const size = block.offsetWidth;
  const count = 1;
  if (size >= 810) {
    return 3;
  } else if (size < 810 && size >= 540) {
    return 2;
  } else {
    return count;
  }
}

export function getRandomCards(pets, count) {
  let arrCards = [];
  let uniqIndexArray = [];
  while (uniqIndexArray.length !== count) {
    let randomIndex = Math.round(Math.random(1) * 7); // get random index
    uniqIndexArray.push(randomIndex);
    uniqIndexArray = [...new Set(uniqIndexArray)];
  }
  for (let n of uniqIndexArray) {
    const card = new Component(
      {
        className: "pets__card",
        id: pets[n].name,
      },
      new Image({
        className: "card__img",
        src: pets[n].img,
        alt: pets[n].alt,
      }),
      new Component({
        tag: "span",
        className: "card__name",
        text: pets[n].name,
      }),
      new Button({
        className: "card__btn",
        onClick: () => {
          const nameCard = card.getNode().id;
          const clikedCard = pets.find((e)=>{
            if(e.name === nameCard){
              return e
            }
          })
          getModalWindow(clikedCard).showModal()
          document.body.classList.add("stopScroll");
          const modal = document.querySelector(".modal-window");
          modal.addEventListener("click", (event) => {
            document.querySelectorAll(".modal-window").forEach((md) => {
              md.remove();
            });
          });


        },
        text: "Learn more",
      }),
    );
    arrCards.push(card.getNode());
  }

  return arrCards;
}
export function loadedCards() {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.innerHTML = "";
  slide.append(...getRandomCards(pets, lengthCards));
  slider.appendChild(slide);
}
let countClick = 0;

function handle(event) {
  const target = event.currentTarget;
  let slides = slider.children;
  const slideWidth = slides[0].offsetWidth;

  if(slider.childNodes.length === 1){
    slider.insertBefore(loadedToStartCards(), slider.firstElementChild);
    loadedCards();
  }

  if (target.classList.contains("pets__button-right")) {
    countClick--;
    loadedCards()



    // slider.style.transform = `translateX(${countClick * slideWidth}px)`;
    setTimeout(() => {
      slider.firstChild.remove()
    }, 0);
    countClick =0
  } else if (target.classList.contains("pets__button-left")) {
    slider.insertBefore(loadedToStartCards(), slider.firstElementChild)
    setTimeout(() => {
      slider.lastChild.remove();
    }, 0);
    countClick++;

    // slider.style.transform = `translateX(${countClick * slideWidth}px)`;
  }



}

export { nextBtn, prevBtn, handle };

function loadedToStartCards(){
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.innerHTML = "";
  slide.append(...getRandomCards(pets, lengthCards));
  return slide
}