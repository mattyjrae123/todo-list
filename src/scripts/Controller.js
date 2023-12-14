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
      View.displayProjects(Model.getProjects());
    }
  }

  return {
    start
  }

})();

export default Controller;
