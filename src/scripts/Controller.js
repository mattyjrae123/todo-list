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
    View.initEventListeners();
    View.bindAddProjectHandler(_addProjectHandler);
  }

  const _addProjectHandler = (title) => {
    if (Model.addProject(title)) {
      _updateView();
    }
  }

  const _deleteProjectHandler = (id) => {
    if (Model.deleteProject(id)) {
      _updateView();
    }
  }

  const _updateView = () => {
    View.displayProjects(Model.getProjects());
    View.bindDeleteProjectHandlers(_deleteProjectHandler);
  }

  return {
    start
  }

})();

export default Controller;
