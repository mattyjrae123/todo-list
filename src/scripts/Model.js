/**
 * Model.js
 * 
 * 
 * 
 * M Rae 11/12/2023
 */
const Model = (() => {
  const projects = [];

  const addProject = (title) => {
    if (!stringIsValid(title)) {
      console.error('addProject string parameter invalid');
      return;
    }

    const id = generateProjectId();

    projects.push({
      id,
      title,
      todos: []
    });
  }

  const generateProjectId = () => {
    if (projects.length <= 0) {
      return 1;
    }
    return projects[projects.length - 1].id + 1;
  }

  const stringIsValid = (input) => {
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

  const getProjectIndex = (id) => {
    if (!(typeof id === 'number' || id instanceof Number)) {
      return -1;
    }

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) {
        return i;
      }
    }
    
    return -1;
  }

  const addItem = (projectId, priority, title, description, date) => {
    const projectIndex = getProjectIndex(projectId);
    
    if (projectIndex <= -1) {
      console.error("Project ID invalid");
      return false;
    }

    if (!(stringIsValid(title) || stringIsValid(description) || stringIsValid(date))) {
      console.error("New todo item parameters invalid");
      return false;
    }

    const id = generateTodoId(projectIndex);
    
    const todo = {
      id,
      priority,
      title,
      description,
      date,
      complete: false
    };

    projects[projectIndex].todos.push(todo);
    generateTodoId(projectIndex);
    return true;
  }

  const generateTodoId = (projectIndex) => {
    const todos = projects[projectIndex].todos;

    if (todos.length <= 0) {
      return 1;
    }

    return todos[todos.length-1].id + 1;
  }

  return {
    addProject,
    getProjects,
    addItem
  }

})();

export default Model;
