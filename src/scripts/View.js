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
  const _todoAddBtn = document.querySelector("#todo-add-btn");
  const _todoCancelBtn = document.querySelector("#todo-cancel-btn");

  const _todoContainer = document.querySelector("#todo-list");
  const _todoPriorityInput = document.querySelector("#td-priority");
  const _todoTitleInput = document.querySelector("#td-title");
  const _todoDescriptionInput = document.querySelector("#td-description");
  const _todoDateInput = document.querySelector("#td-date");

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

  const _bindDynamicHandlers = (query, handler) => {
    const elements = document.querySelectorAll(query);

    for (const element of elements) {
      element.addEventListener(("click"), () => {
        const id = element.getAttribute("data-id");
        handler(id);
      });
    }

    // document.querySelectorAll(query)
    //   .forEach(element => {
    //     element.addEventListener("click", () => {
    //       const id = element.getAttribute("data-id");
    //       handler(id);
    //     });
    // });
  }

  const bindDeleteProjectHandler = (handler) => {
    _bindDynamicHandlers(".list-delete-btn", handler);
  }

  const bindSelectProjectHandler = (handler) => {
    _bindDynamicHandlers("h3", handler);
  }

  const bindDeleteTodoHandler = (handler) => {
    _bindDynamicHandlers(".todo-li .red-btn", handler);
  }

  const bindTodoCompleteHandler = (handler) => {
      _bindDynamicHandlers(".todo-li .green-btn", handler);
  }

  const bindAddTodoHandler = (handler) => {
    _todoAddBtn.addEventListener("click", () => {
      const priority = _todoPriorityInput.value;
      const title = _todoTitleInput.value;
      const description = _todoDescriptionInput.value;
      const date = _todoDateInput.value;
      handler(priority, title, description, date);
    });
  }

  const displayProjects = (currentProjectId, projects) => {
    _sidebarContainer.textContent = "";
    projects.forEach((project) => {
      const wrapper = document.createElement("div");
      const title = document.createElement("h3");
      const button = document.createElement("button");


      wrapper.classList.add("project-wrapper");
      button.classList.add("list-delete-btn");
      button.classList.add("red-btn");

      if (currentProjectId === project.id) {
        title.classList.add("current-list");
      }

      title.setAttribute("data-id", project.id);
      button.setAttribute("data-id", project.id);

      title.textContent = project.title;
      button.textContent = "x";

      wrapper.appendChild(title);
      wrapper.appendChild(button);

      _sidebarContainer.appendChild(wrapper);
    });
  }

  const displayTodos = (todos) => {
    _todoContainer.textContent = "";

    for (const todo of todos) {
      const li = document.createElement("li");
      const divPriority = document.createElement("div");
      const divTitle = document.createElement("div");
      const divDescription = document.createElement("div");
      const divDate = document.createElement("div");
      const completeButton = document.createElement("button");
      const deleteButton = document.createElement("button");

      li.classList.add("todo-li");
      divPriority.classList.add("li-priority");
      divTitle.classList.add("li-title");
      divDescription.classList.add("li-description");
      divDate.classList.add("li-date");
      completeButton.classList.add("green-btn");
      deleteButton.classList.add("red-btn");

      if (todo.isComplete) {
        li.classList.add("li-inactive");
      }

      li.setAttribute("data-id", todo.id);
      completeButton.setAttribute("data-id", todo.id);
      deleteButton.setAttribute("data-id", todo.id);

      divPriority.textContent = todo.priority;
      divTitle.textContent = todo.title;
      divDescription.textContent = todo.description;
      divDate.textContent = todo.date;
      completeButton.innerHTML = "&#x2713;"; //UNICODE for check-mark
      deleteButton.textContent = "X";

      li.appendChild(divPriority);
      li.appendChild(divTitle);
      li.appendChild(divDescription);
      li.appendChild(divDate);
      li.appendChild(completeButton);
      li.appendChild(deleteButton);

      _todoContainer.appendChild(li);
    }
  }

  return {
    initEventListeners,
    bindAddProjectHandler,
    bindDeleteProjectHandler,
    bindSelectProjectHandler,
    bindAddTodoHandler,
    bindDeleteTodoHandler,
    bindTodoCompleteHandler,
    displayProjects,
    displayTodos
  }

})();

export default View;
