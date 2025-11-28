import { Component, Image, Button } from "./infinite-slider-carousel.js";
import { pets } from "../pages/main/index.js";
const modalWindow = document.querySelector(".modal-window");
const modals = document.querySelectorAll('modal-window')


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

//*show modal whith clicked card
function showModalToClickedCard(ev) {
  const click = ev.target;
  let nameCard;
  if (click.classList.contains("card__btn")) {
    return false;
  } else if (click.closest(".pets__card") && !click.classList.contains("pets__card")) {
    nameCard = click.parentNode.id;
  } else if (click.classList.contains("pets__card")) {
    nameCard = click.id;
  }
  let clikedCard = pets.find((e) => {
    if (e.name === nameCard) {
      return e;
    }
  });
  getModalWindow(clikedCard).showModal();
  document.body.classList.add("stopScroll");
  const modal = document.querySelector(".modal-window");
  modal.addEventListener("click", (event) => {


      document.querySelectorAll('.modal-window').forEach((md) => {
        md.remove()
      })


  });

}


//* close modal
function closemodal(){
  const backdrop = document.querySelector('modal-window::backdrop');
  backdrop.addEventListener('click', ()=>{
    modals.forEach(md => md.close())
  })

}




export { getModalWindow, modalWindow, showModalToClickedCard,closemodal };
