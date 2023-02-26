import { currentProject } from "./navigation";

class Todo {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority;
  }
}

function CreateTodoForm() {

  /* General */
  const TodoFormDiv = document.createElement("div");
  TodoFormDiv.classList = "todo-form";

  /* Title */
  const TodoTitleDiv = document.createElement("div")
  TodoTitleDiv.classList = "todo-title-div";
  TodoFormDiv.appendChild(TodoTitleDiv)

    const TodoTitleDivTop = document.createElement("div")
    TodoTitleDivTop.classList = "todo-title-div-top"
    TodoTitleDiv.appendChild(TodoTitleDivTop)

      const TodoTitle = document.createElement("div")
      TodoTitle.classList = "todo-title";
      TodoTitle.innerText = "Title:";
      TodoTitleDivTop.appendChild(TodoTitle);

      const TodoTitleClose = document.createElement("div");
      TodoTitleClose.addEventListener("click", function(){
        TodoFormDiv.remove()
      })
      TodoTitleClose.classList = "todo-title-close"
      TodoTitleClose.innerText = "✕";
      TodoTitleDivTop.appendChild(TodoTitleClose);

    const TodoTitleDivBottom = document.createElement("div")
    TodoTitleDivBottom.classList = "todo-title-div-bottom"
    TodoTitleDiv.appendChild(TodoTitleDivBottom);

      const TodoTitleInput = document.createElement("input");
      TodoTitleInput.classList = "todo-title-input";
      TodoTitleInput.placeholder = "Todo Title...";
      TodoTitleDivBottom.appendChild(TodoTitleInput);

  /* Description */
  const TodoDescriptionDiv = document.createElement("div")
  TodoDescriptionDiv.classList = "todo-description-div"
  TodoFormDiv.appendChild(TodoDescriptionDiv)

    const TodoDescriptionTitle = document.createElement("div")
    TodoDescriptionTitle.classList = "todo-description";
    TodoDescriptionTitle.innerText = "Description:";
    TodoDescriptionDiv.appendChild(TodoDescriptionTitle);

    const TodoDescriptiotInput = document.createElement("textarea");
    TodoDescriptiotInput.classList = "todo-description-input";
    TodoDescriptiotInput.placeholder = "Todo details...";
    TodoDescriptionDiv.appendChild(TodoDescriptiotInput);

  /* DueDate */
  const TodoDateDiv = document.createElement("div")
  TodoDateDiv.classList = "todo-date-div"
  TodoFormDiv.appendChild(TodoDateDiv)

  const TodoDateDivLeft = document.createElement("div")
  TodoDateDivLeft.classList = "todo-date-div-left"
  TodoDateDiv.appendChild(TodoDateDivLeft)

    const TodoDateTitle = document.createElement("div")
    TodoDateTitle.classList = "todo-date";
    TodoDateTitle.innerText = "Date:";
    TodoDateDivLeft.appendChild(TodoDateTitle);

    const TodoDateInput = document.createElement("input");
    TodoDateInput.classList = "todo-date-input";
    TodoDateInput.type = "date"
    TodoDateDivLeft.appendChild(TodoDateInput);

  document.body.appendChild(TodoFormDiv)

  /* Buttons */
  const TodoButtonDiv = document.createElement("div");
  TodoButtonDiv.classList = "todo-buttons-div";
  TodoDateDiv.appendChild(TodoButtonDiv);

    const TodoCloseButton = document.createElement("button")
    TodoCloseButton.addEventListener("click", function(){
      TodoFormDiv.remove()
    })
    TodoCloseButton.classList = "todo-close-button"
    TodoCloseButton.innerText = "Close";
    TodoButtonDiv.appendChild(TodoCloseButton);

    const TodoSubmitButton = document.createElement("button")
    TodoSubmitButton.classList = "todo-submit-button";
    TodoSubmitButton.addEventListener("click", submitTodo)
    TodoSubmitButton.addEventListener("click", function() {
      TodoFormDiv.remove();
    })
    TodoSubmitButton.innerText = "Add Todo";
    TodoButtonDiv.appendChild(TodoSubmitButton);
}

function submitTodo() {
  const TodoDescriptionInput = document.querySelector(".todo-description-input")
  const TodoTitleInput = document.querySelector(".todo-title-input")
  const TodoDateInput = document.querySelector(".todo-date-input")

  currentProject.todoList.push(new Todo(TodoTitleInput.value, TodoDescriptionInput.value, TodoDateInput.value))

  RenderTodos();
}

function RenderTodos() {
  const allTodos = document.querySelectorAll(".todo")
  allTodos.forEach(todo => {todo.remove()})

  const projectBody = document.querySelector(".project-body")
  const addTodoButton = document.querySelector(".add-todo")

  for (let i = 0; i < currentProject.todoList.length; i++) {
    const todoDiv = document.createElement("div")
    todoDiv.classList = "todo"
    todoDiv.innerText = currentProject.todoList[i].title;
    projectBody.insertBefore(todoDiv, addTodoButton);
  }
}

export {CreateTodoForm, RenderTodos} ;