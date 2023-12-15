/**
 * View.js
 * 
 * 
 * 
 * M Rae 11/12/2023
 */
const View = (() => {

  const _sidebarContainer = document.querySelector("#sidebar-list-container");
  const _modalBg = document.querySelector("#modal-bg");

  const _listModalBtn = document.querySelector("#list-modal-btn");
  const _listModal = document.querySelector("#list-modal");
  const _listAddBtn = document.querySelector("#list-add-btn");
  const _listCancelBtn = document.querySelector("#list-cancel-btn");

  const _todoModalBtn = document.querySelector("#todo-modal-btn");
  const _todoModal = document.querySelector("#todo-modal");
  const _todoCancelBtn = document.querySelector("#todo-cancel-btn");

  const initEventListeners = () => {
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
        _modalBg.classList.remove("hidden");
        _todoModal.classList.remove("hidden");
      });

    _todoCancelBtn.addEventListener("click", () => {
      _modalBg.classList.add("hidden");
      _todoModal.classList.add("hidden");
    });
  }

  const bindAddProjectHandler = (handler) => {
    _listAddBtn.addEventListener("click", () => {
      const element = document.querySelector("#new-list-title");
      handler(element.value);
      element.value = "";
    });
  }

  const bindDeleteProjectHandler = (handler) => {
    const projectDeleteButtons = document.querySelectorAll(".list-delete-btn");

    for (const button of projectDeleteButtons) {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        handler(id);
      });
    }
  }

  const bindSelectProjectHandler = (handler) => {
    const projectButtons = document.querySelectorAll("h3");

    for (const projectButton of projectButtons) {
      projectButton.addEventListener("click", () => {
        const id = projectButton.getAttribute("data-id");
        handler(id);
      });
    }
  }

  const displayProjects = (projects) => {
    _sidebarContainer.textContent = "";
    projects.forEach((project) => {
      const wrapper = document.createElement("div");
      const title = document.createElement("h3");
      const button = document.createElement("button");


      wrapper.classList.add("project-wrapper");
      button.classList.add("list-delete-btn");
      button.classList.add("red-btn");

      title.setAttribute("data-id", project.id);
      button.setAttribute("data-id", project.id);

      title.textContent = project.title;
      button.textContent = "x";

      wrapper.appendChild(title);
      wrapper.appendChild(button);

      _sidebarContainer.appendChild(wrapper);
    });
  }

  return {
    initEventListeners,
    bindAddProjectHandler,
    bindDeleteProjectHandler,
    bindSelectProjectHandler,
    displayProjects
  }

})();

export default View;
