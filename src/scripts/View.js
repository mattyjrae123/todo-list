/**
 * View.js
 * 
 * 
 * 
 * M Rae 11/12/2023
 */
const View = (() => {

  const _modalBg = document.querySelector("#modal-bg");
  const _listAddModalBtn = document.querySelector("#list-add-btn");
  const _listAddModal = document.querySelector("#list-add-modal");
  const _listCancelBtn = document.querySelector("#list-add-cancel");

  const _itemAddModalBtn = document.querySelector("#item-add-btn");
  const _itemAddModal = document.querySelector("#item-add-modal");
  const _itemCancelBtn = document.querySelector("#item-add-cancel");

  const initEventListeners = (projectsExist) => {
    _listAddModalBtn.addEventListener("click", () => {
      _modalBg.classList.remove("hidden");
      _listAddModal.classList.remove("hidden");
    });

    _listCancelBtn
      .addEventListener("click", () => {
        _modalBg.classList.add("hidden");

        _listAddModal.classList.add("hidden");
      })

    _itemAddModalBtn
      .addEventListener("click", () => {
        if (!projectsExist()) {
          window.alert("You must create a project first!");
          return;
        }
        
        _modalBg.classList.remove("hidden");
        _itemAddModal.classList.remove("hidden");
      });

    _itemCancelBtn.addEventListener("click", () => {
      _modalBg.classList.add("hidden");
      _itemAddModal.classList.add("hidden");
    });
  }

  return {
    initEventListeners
  }

})();

export default View;
