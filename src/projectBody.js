import { projectList } from "./navigation";
import { CreateTodoForm, RenderTodos } from "./todoForm";


function CreateProjectPage(project) {
  /* General Elements */
  const projectBody = document.querySelector(".project-body");

  /* Project Navn som title. */
  const projectBodyTitle = document.createElement("div");
  projectBodyTitle.classList = "project-body-title";
  projectBodyTitle.innerText = project.title;
  projectBody.appendChild(projectBodyTitle);


  /* Alle Todos */
      /* Skal først have lavet knappen, så man kan tilføje todos */
  
  /* + Add todo knap */
  const addTodoButton = document.createElement("div");
  addTodoButton.classList = "add-todo";
  addTodoButton.id = project.id;
  addTodoButton.innerText = "＋ Add Todo"
  addTodoButton.addEventListener("click", CreateTodoForm)

  projectBody.appendChild(addTodoButton);
}

function RenderProjectPage(project) {
  /* General Elements */
  const projectBody = document.querySelector(".project-body");
  projectBody.innerText = "";
  CreateProjectPage(project);
}

export {RenderProjectPage};

