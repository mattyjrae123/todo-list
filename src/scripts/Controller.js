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
    Model.addProject('First');
    Model.addProject('Second');
    Model.addItem(1, 'low', 'example1', 'example1111111', '12/02/23');

    console.log(Model.getProjects());
    console.log(Model.getTodos(1));

    View.initEventListeners(Model.projectsExist);
    console.log(Model.getProjects().length);
  }

  return {
    start
  }

})();

export default Controller;
