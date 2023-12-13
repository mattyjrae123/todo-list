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
    if (!(typeof newTitle === 'string' || newTitle instanceof String)) {
      console.error("addProject() parameter not of type String");
      return;
    }
    if (newTitle.length <= 0) {
      console.error("addProject() parameter length <= 0");
      return;
    };

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
    return [...projects];
  }

  return {
    addProject,
    getProjects
  }

})();

export default Model;
