# todo-list

[Link to live page](https://mattyjrae123.github.io/todo-list/)

This project is part of 'The Odin Project' javascript course. It's a browser based Todo List app. 

I'll be using HTML, CSS and JS but also utilising node and webpack for development tools. As the scope of this project is significantly larger than previous projects, this is a good opportunity to put everything I've learned up until this point together.

## Plan
- Design basic UI with Figma
- Design backend
- Build UI with HTMl/CSS
- Build functionality with JS
- MVC pattern (controller knows about model and view, but model and view only know about themselves)

### Initial Project Scope:
- Todo 'tasks' should have a title, description, dueDate and priority
- Todo 'tasks' should be split into 'projects' or seperate 'lists
- Projects can be created/deleted by the user
- Todo tasks can be created/deleted by the user
- Seperate application logic from UI logic using modules
- 

### Advanced Scope:
- Data persistence using localStorage

### Model
- Store array of projects
- Each project is an object containing a title and an array of tasks
-  Each task is an object containing title, description, dueDate, priority and ID (ID for plumbing between task and UI element)

### View
- Generate HTML elements for project lists on page load, adding project or deleting project
- Generate HTML elements for project tasks on page load (default project), adding task, deleting task, editing task, changing displayed project

### Controller
- Contains 'model' and 'view' objects and coordinates functionality of the site.
- On load, start functions to generate project list and load default projects todo tasks.

#### Rough design (ignore colours)

![Draft web page design](ui-design.png)
