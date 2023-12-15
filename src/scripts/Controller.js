import View from "./View";
import Model from "./Model";

/**
 * Controller
 * 
 * 
 * 
 * M Rae 11/12/2023
 */
const Controller = (() => {

  const start = () => {
    Model.addProject("Default");
    Model.selectProject(1);
    View.initEventListeners();
    View.bindAddProjectHandler(_addProjectHandler);
    View.bindAddTodoHandler(_addTodoHandler);
    _updateView();
  }

  const _addProjectHandler = (title) => {
    if (Model.addProject(title)) {
      _updateView();
    }
  }

  const _deleteProjectHandler = (id) => {
    id = Number(id);

    // Default project can't be deleted
    if (id === 1) {
      return;
    }

    // If deleting current project, select Default to display
    if (Model.getCurrentProjectId() === id) {
      Model.selectProject(1);
    }

    if (Model.deleteProject(id)) {
      _updateView();
    }
  }

  const _selectProjectHandler = (id) => {
    id = Number(id);
    Model.selectProject(id);
    _updateView();
  }

  const _addTodoHandler = (priority, title, description, date) => {
    Model.addTodo(priority, title, description, date);
    _updateView();
  }

  const _todoCompleteHandler = (id) => {
    id = Number(id);
    Model.toggleComplete(id);
    _updateView();
  }

  const _updateView = () => {
    View.displayProjects(Model.getCurrentProjectId(), Model.getProjects());
    View.displayTodos(Model.getTodos(Model.getCurrentProjectId()));
    View.bindDeleteProjectHandler(_deleteProjectHandler);
    View.bindSelectProjectHandler(_selectProjectHandler);
    View.bindTodoCompleteHandler(_todoCompleteHandler);
  }

  return {
    start
  }

})();

export default Controller;
