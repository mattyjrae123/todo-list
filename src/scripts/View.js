/**
 * View.js
 * 
 * 
 * 
 * M Rae 11/12/2023
 */
const View = (() => {

  const modalBg = document.querySelector("#modal-bg");
  const listAddModal = document.querySelector("#list-add-modal");

  document.querySelector("#list-add-btn")
  .addEventListener("click", () => {
    modalBg.classList.remove("hidden");
    listAddModal.classList.remove("hidden");
  });

})();

export default View;
