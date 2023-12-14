/**
 * View.js
 * 
 * 
 * 
 * M Rae 11/12/2023
 */
const View = (() => {

  const modalBg = document.querySelector("#modal-bg");
  const listAddBtn = document.querySelector("#list-add-btn");
  const itemAddBtn = document.querySelector("#item-add-btn");
  const listAddModal = document.querySelector("#list-add-modal");
  const itemAddModal = document.querySelector("#item-add-modal");

  listAddBtn
  .addEventListener("click", () => {
    modalBg.classList.remove("hidden");
    listAddModal.classList.remove("hidden");
  });

  itemAddBtn
  .addEventListener("click", () => {
    modalBg.classList.remove("hidden");
    itemAddModal.classList.remove("hidden");
  });

})();

export default View;
