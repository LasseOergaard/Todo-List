import {RenderProjectPage } from "./projectBody.js";

var projectList = [];
let projectTitle;
/* Toggles */
function ToggleNavigation() {
  const navigation = document.querySelector(".navigation")
  navigation.classList.toggle("navigation-active")
  navigation.classList.toggle("navigation-inactive")

  const projectBody = document.querySelector(".project-body");
  projectBody.classList.toggle("project-body-small")
  projectBody.classList.toggle("project-body-large")

  
}

function ToggleProjects() {
  const projectList = document.querySelector(".navigation__project-list");
  projectList.classList.toggle("navigation__project-list-active")
  projectList.classList.toggle("navigation__project-list-inactive")

  const projectArrow = document.querySelector(".project-arrow");
  projectArrow.classList.toggle("fa-chevron-down");
  projectArrow.classList.toggle("fa-chevron-up");
}

/* Class Templates */

class Project{
  constructor(title) {
    this.title = title;
    this.todoList = [];
    this.id = Date.now();
  }

  OpenProject() {
    var currentProject;
    projectList.forEach(project => {
      if (project.title == this.innerText) {
        currentProject = project;
      }
    })

    RenderProjectPage(currentProject)
  }

  DeleteProject() {
    return;
  }

}
 
/* Functions */
function AskProjectName() {

  /* General Elements */
  const askProjectNameDiv = document.createElement("div");
  askProjectNameDiv.classList = "ask-project-name-div";


/* Title */
  const askProjectNameTitle = document.createElement("div");
  askProjectNameTitle.classList = "ask-project-name-title";
  askProjectNameDiv.appendChild(askProjectNameTitle);

    const askProjectNameTitleName = document.createElement("p");
    askProjectNameTitleName.classList = "ask-project-name-title-name";
    askProjectNameTitleName.innerText = "New Project";
    askProjectNameTitle.appendChild(askProjectNameTitleName);

    const askProjectNameTitleClose = document.createElement("div");
    askProjectNameTitleClose.classList = "ask-project-name-close"
    askProjectNameTitleClose.innerText = "✕";
    askProjectNameTitleClose.addEventListener("click", function() {askProjectNameDiv.remove()})
    askProjectNameTitle.appendChild(askProjectNameTitleClose);

/* Input Field */
  const askProjectNameInputField = document.createElement("div");
  askProjectNameInputField.classList = "ask-project-name-input-field";
  askProjectNameDiv.appendChild(askProjectNameInputField);

    const askProjectNameInputFieldTitle = document.createElement("div")
    askProjectNameInputFieldTitle.classList = "ask-project-name-input-field-title";
    askProjectNameInputFieldTitle.innerText = "Name:";
    askProjectNameInputField.appendChild(askProjectNameInputFieldTitle)

    const askProjectNameInputFieldInput = document.createElement("input")
    askProjectNameInputFieldInput.classList = "ask-project-name-input-field-input";
    askProjectNameInputFieldInput.placeholder = "Project name..."
    askProjectNameInputField.appendChild(askProjectNameInputFieldInput);

/* Buttons */
  const askProjectNameButtons = document.createElement("div");
  askProjectNameButtons.classList = "ask-project-name-buttons";
  askProjectNameDiv.appendChild(askProjectNameButtons);

    const askProjectNameButtonsClose = document.createElement("button")
    askProjectNameButtonsClose.classList = "ask-project-name-buttons-close"
    askProjectNameButtonsClose.innerText = "Close";
    askProjectNameButtonsClose.addEventListener("click", function() {askProjectNameDiv.remove()})
    askProjectNameButtons.appendChild(askProjectNameButtonsClose);

    const askProjectNameButtonsSubmit = document.createElement("button")
    askProjectNameButtonsSubmit.classList = "ask-project-name-buttons-submit";
    askProjectNameButtonsSubmit.innerText = "Add Project";
    askProjectNameButtonsSubmit.addEventListener("click", SubmitProject)
    askProjectNameDiv.addEventListener("keypress", function(event) {
      if(event.key === "Enter") {
        SubmitProject()
      }
    })
    askProjectNameButtons.appendChild(askProjectNameButtonsSubmit);

  document.body.appendChild(askProjectNameDiv)
}

function SubmitProject() {
  const projectInput = document.querySelector(".ask-project-name-input-field-input");
  const askProjectNameDiv = document.querySelector(".ask-project-name-div")
  if (projectInput.value.length == 0) {
    return;
  }
  else {
    projectTitle = projectInput.value;
    askProjectNameDiv.remove()
    AddProjectToList()
  }
}

function AddProjectToList() {
  projectList.push(new Project(projectTitle));
  RenderProjects();
}

function RenderProjects() {
  const projectListDiv = document.querySelector(".navigation__project-list");
  const AddProjectButton = document.querySelector(".add-project");
  projectListDiv.innerText = ""


  projectList.forEach(project => {
    let projectDiv = document.createElement("div");
    projectDiv.addEventListener("click", project.OpenProject);
    projectDiv.classList = "project";
    projectDiv.innerText = project.title;    
    projectListDiv.appendChild(projectDiv);
  })

  projectListDiv.appendChild(AddProjectButton)
}

export {ToggleNavigation, ToggleProjects, AskProjectName, projectList};