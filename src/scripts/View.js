/**
 * View.js
 * 
 * 
 * 
 * M Rae 11/12/2023
 */
const View = (() => {

  const modalBg = document.querySelector("#modal-bg");
  const listAddModalBtn = document.querySelector("#list-add-btn");
  const listAddModal = document.querySelector("#list-add-modal");
  const listCancelBtn = document.querySelector("#list-add-cancel");

  const itemAddModalBtn = document.querySelector("#item-add-btn");
  const itemAddModal = document.querySelector("#item-add-modal");
  const itemCancelBtn = document.querySelector("#item-add-cancel");

  const initEventListeners = (projectsExist) => {
    listAddModalBtn.addEventListener("click", () => {
      modalBg.classList.remove("hidden");
      listAddModal.classList.remove("hidden");
    });

    listCancelBtn
      .addEventListener("click", () => {
        modalBg.classList.add("hidden");

        listAddModal.classList.add("hidden");
      })

    itemAddModalBtn
      .addEventListener("click", () => {
        if (!projectsExist()) {
          window.alert("You must create a project first!");
          return;
        }
        
        modalBg.classList.remove("hidden");
        itemAddModal.classList.remove("hidden");
      });

    itemCancelBtn.addEventListener("click", () => {
      modalBg.classList.add("hidden");
      itemAddModal.classList.add("hidden");
    });
  }

  return {
    initEventListeners
  }

})();

export default View;
