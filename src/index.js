import './styles/style.css';

import Model from './scripts/Model';
import View from './scripts/View';
import Controller from './scripts/Controller'

console.log(Model.getProjects());
Model.addProject("First");
Model.addProject("SeCOND");
console.log(Model.getProjects());
Model.addItem(1, "Pirority", "TiTle", "BIG DESCRIPToon", "01/01/2001");

console.log(Model.getProjects());


// const modalBackground = document.querySelector("#modal-bg");
// const listModal = document.querySelector("#list-add-modal");
// const itemModal = document.querySelector("#item-add-modal");

// /**
//  * List Add Modal
//  */
// document.querySelector("#list-add-btn")
//   .addEventListener("click", () => {
//     modalBackground.classList.remove("hidden");
//     listModal.classList.remove("hidden");

//   });

//   /**
//    * Item Add Modal
//    */
// document.querySelector("#item-add-btn")
//   .addEventListener("click", () => {
//     modalBackground.classList.remove("hidden");
//     itemModal.classList.remove("hidden");

//   });
