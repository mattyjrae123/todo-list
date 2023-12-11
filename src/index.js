import './styles/style.css';

console.log("noodle is here");

const modalBackground = document.querySelector("#modal-bg");
const listModal = document.querySelector("#list-add-modal");
const itemModal = document.querySelector("#item-add-modal");

/**
 * List Add Modal
 */
document.querySelector("#list-add-btn")
  .addEventListener("click", () => {
    modalBackground.classList.remove("hidden");
    listModal.classList.remove("hidden");

  });

  /**
   * Item Add Modal
   */
document.querySelector("#item-add-btn")
  .addEventListener("click", () => {
    modalBackground.classList.remove("hidden");
    itemModal.classList.remove("hidden");

  });
