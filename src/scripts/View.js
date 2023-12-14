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

  const initEventListeners = (projectsExist, addProject, getProjects) => {
    _listModalBtn.addEventListener("click", () => {
      _modalBg.classList.remove("hidden");
      _listModal.classList.remove("hidden");
    });

    _listAddBtn.addEventListener("click", () => {
      const input = document.querySelector("#new-list-title");
      
      if (input.value.length <= 0) {
        console.error("New list title is too short");
        return;
      }

      addProject(input.value);
      input.value = "";

      _displayProjects(getProjects());
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

  const _displayProjects = (projects) => {
    _sidebarContainer.textContent = "";
    projects.forEach((project) => {
      const projectHTML = document.createElement("h3");
      projectHTML.textContent = project.title;
      _sidebarContainer.appendChild(projectHTML);
    });
  }

  return {
    initEventListeners
  }

})();

export default View;
