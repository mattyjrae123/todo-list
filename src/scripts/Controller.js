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
    View.bindAddProjectHandler(addProjectHandler);
  }

  const addProjectHandler = (title) => {
    if (Model.addProject(title)) {
      _updateView();
    }
  }

  const deleteProjectHandler = (id) => {
    if (Model.deleteProject(id)) {
      _updateView();
    }
  }

  const _updateView = () => {
    View.displayProjects(Model.getProjects());
    View.bindDeleteProjectHandlers(deleteProjectHandler);
  }

  return {
    start
  }

})();

export default Controller;
