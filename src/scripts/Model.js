/**
 * Model.js
 * 
 * 
 * 
 * M Rae 11/12/2023
 */
const Model = (() => {
  const projects = [];

  const addProject = (newTitle) => {
    if (!strInputValid(newTitle)) {
      console.error('addProject string parameter invalid');
      return;
    }

    const newID = generateID();

    projects.push({
      id: newID,
      title: newTitle,
      items: []
    });
  }

  const generateID = () => {
    if (projects.length <= 0) {
      return 1;
    }
    return projects[projects.length - 1].id + 1;
  }

  const strInputValid = (input) => {
    if (!(typeof input === 'string' || input instanceof String)) {
      return false;
    }

    if (input.length <= 0) {
      return false;
    }

    return true;
  }

  const getProjects = () => {
    return [...projects];
  }

  return {
    addProject,
    getProjects
  }

})();

export default Model;
