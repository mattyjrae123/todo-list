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
    let newID;
    if (projects.length <= 0) {
      newID = 1;
    } else {
      newID = projects[projects.length - 1].id + 1;
    }

    projects.push({
      id: newID,
      title: newTitle,
      items: []
    });
  }

  const getProjects = () => {
    return projects;
  }

  return {
    addProject,
    getProjects
  }

})();

export default Model;
