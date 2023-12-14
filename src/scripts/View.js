/**
 * View.js
 * 
 * 
 * 
 * M Rae 11/12/2023
 */
const View = (() => {

  const _modalBg = document.querySelector("#modal-bg");

  const _listModalBtn = document.querySelector("#list-modal-btn");
  const _listModal = document.querySelector("#list-modal");
  const _listCancelBtn = document.querySelector("#list-cancel-btn");

  const _todoModalBtn = document.querySelector("#todo-modal-btn");
  const _todoModal = document.querySelector("#todo-modal");
  const _todoCancelBtn = document.querySelector("#todo-cancel-btn");

  const initEventListeners = (projectsExist) => {
    _listModalBtn.addEventListener("click", () => {
      _modalBg.classList.remove("hidden");
      _listModal.classList.remove("hidden");
    });

    _listCancelBtn
      .addEventListener("click", () => {
        _modalBg.classList.add("hidden");

        _listModal.classList.add("hidden");
      })

    _todoModalBtn
      .addEventListener("click", () => {
        if (!projectsExist()) {
          window.alert("You must create a project first!");
          return;
        }
        
        _modalBg.classList.remove("hidden");
        _todoModal.classList.remove("hidden");
      });

    _todoCancelBtn.addEventListener("click", () => {
      _modalBg.classList.add("hidden");
      _todoModal.classList.add("hidden");
    });
  }

  return {
    initEventListeners
  }

})();

export default View;
