

class Project {
  constructor(title) {
    this.title = title;
    this.todoList = [];
    this.id = Date.now();
  }

  OpenProject() {
    projectList.forEach((project) => {
      if (project.title == this.innerText) {
        currentProject = project;
      }
    });

    RenderProjectPage(currentProject);
    RenderTodos();
  }
}

class Todo {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority;
    this.id = Date.now();
    this.checked = false;
  }
}

export { Project, Todo }