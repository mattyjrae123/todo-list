/**
 * Model.js
 * 
 * 
 * 
 * M Rae 11/12/2023
 */
const Model = (() => {
  const _projects = [];

  const addProject = (title) => {
    if (!_stringIsValid(title)) {
      console.error('addProject string parameter invalid');
      return;
    }

    const id = _generateProjectId();

    _projects.push({
      id,
      title,
      todos: []
    });
  }

  const getProjects = () => {
    return [..._projects];
  }

  const addItem = (projectId, priority, title, description, date) => {
    const projectIndex = _getProjectIndex(projectId);

    if (projectIndex <= -1) {
      console.error("Project ID invalid");
      return false;
    }

    if (!(_stringIsValid(title) || _stringIsValid(description) || _stringIsValid(date))) {
      console.error("New todo item parameters invalid");
      return false;
    }

    const id = _generateTodoId(projectIndex);

    const todo = {
      id,
      priority,
      title,
      description,
      date,
      complete: false
    };

    _projects[projectIndex].todos.push(todo);
    _generateTodoId(projectIndex);
    return true;
  }

  const _generateProjectId = () => {
    if (_projects.length <= 0) {
      return 1;
    }
    return _projects[_projects.length - 1].id + 1;
  }

  const _generateTodoId = (projectIndex) => {
    const todos = _projects[projectIndex].todos;

    if (todos.length <= 0) {
      return 1;
    }

    return todos[todos.length - 1].id + 1;
  }

  const _getProjectIndex = (id) => {
    if (!(typeof id === 'number' || id instanceof Number)) {
      return -1;
    }

    for (let i = 0; i < _projects.length; i++) {
      if (_projects[i].id === id) {
        return i;
      }
    }

    return -1;
  }

  const _stringIsValid = (input) => {
    if (!(typeof input === 'string' || input instanceof String)) {
      return false;
    }

    if (input.length <= 0) {
      return false;
    }

    return true;
  }

  return {
    addProject,
    getProjects,
    addItem
  }

})();

export default Model;
