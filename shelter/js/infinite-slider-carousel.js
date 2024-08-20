import { pets } from "../pages/main/index.js";
export const sliderContainer = document.querySelector(".block-card__slider");

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
          console.log("hello I am button card");
        },
        text: "Learn more",
      }),
    );
    arrCards.push(card.getNode());
  }

  return arrCards;
}
export function loadedCards() {
  const windowWidth = window.innerWidth;
  const container = document.querySelector(".block-card__slider");
  switch (windowWidth) {
    case 1280:
      container.style.gap = "90px";
      break;

    case 786:
      container.style.gap = "40px";
      break;

    default:
      break;
  }

  let count = returnedCountCards(sliderContainer);
  console.log(count);
  sliderContainer.innerHTML = "";
  return sliderContainer.append(...getRandomCards(pets, count));
}

//* listener to btn card
export function clickedBtn(event) {
  const click = event.target;
  const oldSlides = sliderContainer.getElementsByClassName("pets__card");
  const newCards = returnedNewSlides(oldSlides, returnedCountCards(sliderContainer));
  if (click.closest("pets__button-left") || click.classList.contains("pets__button-left")) {
    sliderContainer.style.width ="max-content";
    sliderContainer.append(...newCards);

    console.log(typeof oldSlides);



    console.log(click);
  } else if (click.closest("pets__button-right") || click.classList.contains("pets__button-right")) {
    console.log(click);
  }
}

function returnedNewSlides(oldSlides, count) {
  let newSlides = getRandomCards(pets, count);
  for (let i = 0; i < oldSlides.length; i++) {
    for (let j = 0; j < newSlides.length; j++) {
      if (oldSlides[i].id === newSlides[j].id) {
        j = 0;
        i = 0;
        newSlides = getRandomCards(pets, count);
      }
    }
  }
  return newSlides;
}
