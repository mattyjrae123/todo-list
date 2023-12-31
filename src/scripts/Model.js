/**
 * Model.js
 * 
 * 
 * 
 * M Rae 11/12/2023
 */
const Model = (() => {
  let _projects = [];
  let _currentProjectId;
  let storageAvailable = false;

  const init = () => {
    if (_storageIsAvailable()) {
      if (!_checkStorageExists()) {
        addProject("Default");
        selectProject(1);
      }
    }
  }

  const addProject = (title) => {
    if (!_stringIsValid(title)) {
      console.error('addProject string parameter invalid');
      return false;
    }

    const id = _generateProjectId();

    _projects.push({
      id,
      title,
      todos: []
    });

    if (storageAvailable) {
      _populateStorage();
    }

    return true;
  }

  const deleteProject = (id) => {
    for (let i = 0; i < _projects.length; i++) {
      if (_projects[i].id === id) {
        _projects.splice(i, 1);

        if (storageAvailable) {
          _populateStorage();
        }

        return true;
      }
    }

    return false;
  }
  
  const selectProject = (id) => {
    _currentProjectId = id;

    _populateStorage();
  }

  const getCurrentProjectId = () => {
    return _currentProjectId;
  }

  const getProjects = () => {
    return [..._projects];
  }

  const projectsExist = () => {
    return _projects.length > 0;
  }

  const getTodos = (projectId) => {
    const projectIndex = _getProjectIndex(projectId);

    if (projectIndex < 0) {
      return;
    }

    return [..._projects[projectIndex].todos];
  }

  const addTodo = (priority, title, description, date) => {
    const projectIndex = _getProjectIndex(_currentProjectId);

    if (!(_stringIsValid(title) || _stringIsValid(description) || _stringIsValid(date))) {
      console.error("New todo parameters invalid");
      return false;
    }

    const id = _generateTodoId(projectIndex);

    const todo = {
      id,
      priority,
      title,
      description,
      date,
      isComplete: false
    };

    _projects[projectIndex].todos.push(todo);

    if (storageAvailable) {
      _populateStorage();
    }
    return true;
  }

  const deleteTodo = (todoId) => {
    const projectIndex = _getProjectIndex(getCurrentProjectId());

    if (projectIndex < 0) {
      console.error("deleteTodo: projectId invalid");
      return;
    }

    const todoIndex = _getTodoIndex(projectIndex, todoId);

    if (todoIndex < 0) {
      console.error("deleteTodo: todoId invalid");
      return;
    }

    _projects[projectIndex].todos.splice(todoIndex, 1);
  }

  const toggleComplete = (id) => {
    const projectIndex = _getProjectIndex(getCurrentProjectId());
    const todoIndex = _getTodoIndex(projectIndex, id);

    if (projectIndex < 0 || todoIndex < 0) {
      return;
    }

    _projects[projectIndex].todos[todoIndex].isComplete = !_projects[projectIndex].todos[todoIndex].isComplete;
  }

  const _storageIsAvailable = () => {
    try {
      const x = "__storage_test__";
      window.localStorage.setItem(x, x);
      window.localStorage.removeItem(x);
      storageAvailable = true;
      return true;

    } catch (e) {
      return false;
    }
  }

  const _checkStorageExists = () => {
    if (!window.localStorage.getItem("projects")) {
      _populateStorage();
      return false;
    }
    _projects = JSON.parse(window.localStorage.getItem("projects"));
    _currentProjectId = JSON.parse(window.localStorage.getItem("currentProject"));
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

  const _getTodoIndex = (projectIndex, todoId) => {
    if (!(typeof todoId === 'number' || todoId instanceof Number)) {
      return -1;
    }
    const todos = _projects[projectIndex].todos;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todoId) {
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

  const _populateStorage = () => {
    window.localStorage.setItem("projects", JSON.stringify(_projects));
    window.localStorage.setItem("currentProject", JSON.stringify(_currentProjectId));
  }

  return {
    init,
    addProject,
    deleteProject,
    selectProject,
    getProjects,
    getCurrentProjectId,
    projectsExist,
    getTodos,
    addTodo,
    deleteTodo,
    toggleComplete
  }

})();

export default Model;
