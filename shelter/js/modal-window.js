import { Component, Image, Button } from "./infinite-slider-carousel.js";
import { pets } from "../pages/main/index.js";
const modalWindow = document.querySelector(".modal-window");


function getModalWindow(data) {
  const dialog = new Component({
    tag: "dialog",
    className: "modal-window",
  });
  const btnClose = new Button({
    className: "button-slider btn-modal",

    onClick: () => {
      dialog.getNode().close();
      document.body.classList.remove("stopScroll");
    },
  });
  btnClose.getNode().innerHTML = `&times;`;
  dialog.append(btnClose);
  const container = new Component({
    className: "modal-container",
  });

  const modalImg = new Image({ className: "modal-img" });
  modalImg.addSrc(data.img);
  modalImg.setAltText(data.name);

  container.append(modalImg);
  const modalContent = new Component({ className: "modal-content" });
  const childContent = new Component(
    { className: "modal-description" },
    new Component({ tag: "h3", className: "pet-name", text: data.name }),
    new Component({ tag: "h4", className: "pet-typeBreed", text: `${data.type} - ${data.breed}` }),
    new Component({ tag: "h5", className: "pet-description", text: data.description }),
  );
  modalContent.append(childContent);

  const listContent = new Component({ tag: "ul", className: "modal-list" });

  const arrKeysData = Object.keys(data);
  for (let i = 5; i <= arrKeysData.length - 1; i++) {
    const textItem = arrKeysData[i].replace(arrKeysData[i][0], arrKeysData[i][0].toUpperCase())
    const itemList = new Component(
      { tag: "li", className: "list-item" },
      new Component({ tag: "span", className: "name-item", text: `${textItem} : ` }),
      new Component({ tag: "span", className: "text-item", text: data[arrKeysData[i]] }),
    );
    listContent.append(itemList);
  }
  modalContent.append(listContent);

  container.append(modalContent);
  dialog.append(container);
  return document.body.appendChild(dialog.getNode());
}

export { getModalWindow, modalWindow };
