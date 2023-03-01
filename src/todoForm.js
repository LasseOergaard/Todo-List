import { currentProject } from "./navigation";
import { Todo } from "./classes";



function CreateTodoForm() {

  /* General */
  const TodoFormDiv = document.createElement("div");
  TodoFormDiv.classList = "todo-form";

  /* Title */
  const TodoTitleDiv = document.createElement("div")
  TodoTitleDiv.classList = "todo-form-title-div";
  TodoFormDiv.appendChild(TodoTitleDiv)

    const TodoTitleDivTop = document.createElement("div")
    TodoTitleDivTop.classList = "todo-form-title-div-top"
    TodoTitleDiv.appendChild(TodoTitleDivTop)

      const TodoTitle = document.createElement("div")
      TodoTitle.classList = "todo-form-title";
      TodoTitle.innerText = "Title:";
      TodoTitleDivTop.appendChild(TodoTitle);

      const TodoTitleClose = document.createElement("div");
      TodoTitleClose.addEventListener("click", function(){
        TodoFormDiv.remove()
      })
      TodoTitleClose.classList = "todo-form-title-close"
      TodoTitleClose.innerText = "✕";
      TodoTitleDivTop.appendChild(TodoTitleClose);

    const TodoTitleDivBottom = document.createElement("div")
    TodoTitleDivBottom.classList = "todo-form-title-div-bottom"
    TodoTitleDiv.appendChild(TodoTitleDivBottom);

      const TodoTitleInput = document.createElement("input");
      TodoTitleInput.classList = "todo-form-title-input";
      TodoTitleInput.placeholder = "Todo Title...";
      TodoTitleDivBottom.appendChild(TodoTitleInput);

  /* Description */
  const TodoDescriptionDiv = document.createElement("div")
  TodoDescriptionDiv.classList = "todo-form-description-div"
  TodoFormDiv.appendChild(TodoDescriptionDiv)

    const TodoDescriptionTitle = document.createElement("div")
    TodoDescriptionTitle.classList = "todo-form-description";
    TodoDescriptionTitle.innerText = "Description:";
    TodoDescriptionDiv.appendChild(TodoDescriptionTitle);

    const TodoDescriptiotInput = document.createElement("textarea");
    TodoDescriptiotInput.classList = "todo-form-description-input";
    TodoDescriptiotInput.placeholder = "Todo details...";
    TodoDescriptionDiv.appendChild(TodoDescriptiotInput);

  /* DueDate */
  const TodoDateDiv = document.createElement("div")
  TodoDateDiv.classList = "todo-form-date-div"
  TodoFormDiv.appendChild(TodoDateDiv)

  const TodoDateDivLeft = document.createElement("div")
  TodoDateDivLeft.classList = "todo-form-date-div-left"
  TodoDateDiv.appendChild(TodoDateDivLeft)

    const TodoDateTitle = document.createElement("div")
    TodoDateTitle.classList = "todo-form-date";
    TodoDateTitle.innerText = "Date:";
    TodoDateDivLeft.appendChild(TodoDateTitle);

    const TodoDateInput = document.createElement("input");
    TodoDateInput.classList = "todo-form-date-input";
    TodoDateInput.type = "date"
    TodoDateDivLeft.appendChild(TodoDateInput);

  document.body.appendChild(TodoFormDiv)

  /* Buttons */
  const TodoButtonDiv = document.createElement("div");
  TodoButtonDiv.classList = "todo-form-buttons-div";
  TodoDateDiv.appendChild(TodoButtonDiv);

    const TodoCloseButton = document.createElement("button")
    TodoCloseButton.addEventListener("click", function(){
      TodoFormDiv.remove()
    })
    TodoCloseButton.classList = "todo-form-close-button"
    TodoCloseButton.innerText = "Close";
    TodoButtonDiv.appendChild(TodoCloseButton);

    const TodoSubmitButton = document.createElement("button")
    TodoSubmitButton.classList = "todo-form-submit-button";
    TodoSubmitButton.addEventListener("click", submitTodo)
    TodoSubmitButton.addEventListener("click", function() {
      TodoFormDiv.remove();
    })
    TodoSubmitButton.innerText = "Add Todo";
    TodoButtonDiv.appendChild(TodoSubmitButton);
}

function CreateTodo(todoIndex) {

  /* Todo Values */
  let title = currentProject.todoList[todoIndex].title;
  let description = currentProject.todoList[todoIndex].description;
  let date = currentProject.todoList[todoIndex].date;
  let priority = currentProject.todoList[todoIndex].priority;
  let id = currentProject.todoList[todoIndex].id;
  let isChecked = currentProject.todoList[todoIndex].checked;

  /* General */
  const projectBody = document.querySelector(".project-body")
  const addTodoButton = document.querySelector(".add-todo")


  /* Todo */

  let todo = document.createElement("div");
  todo.classList = "todo";

  let todoLeft = document.createElement("div");
  todoLeft.classList = "todo-left";

  let todoRight = document.createElement("div");
  todoRight.classList =  "todo-right";

  const todoCheckbox = document.createElement("input")
  todoCheckbox.type = "checkbox"
  todoCheckbox.classList = "todo-checkbox"
  todoCheckbox.setAttribute("id", id);
  todoCheckbox.addEventListener("change", ChangeChecked)
  if (isChecked) {
    todoCheckbox.checked = true;
  } else {todoCheckbox.checked = false;}
  todoLeft.appendChild(todoCheckbox);
  
  let todoTitle = document.createElement("div")
  todoTitle.classList = "todo-title"
  todoTitle.innerText = title;
  todoLeft.appendChild(todoTitle);

  let todoDate = document.createElement("div")
  todoDate.classList = "todo-date"
  todoDate.innerText = date;
  todoRight.appendChild(todoDate);

  let todoEdit = document.createElement("div");
  let editIcon = document.createElement("i")
  editIcon.classList = "todo-edit fa-solid fa-pen-to-square"
  todoEdit.setAttribute("id", id);
  todoEdit.appendChild(editIcon);
  todoRight.appendChild(todoEdit);
  

  let todoDelete = document.createElement("div");
  let deleteIcon = document.createElement("i")
  deleteIcon.classList = "todo-delete fa-solid fa-trash"
  todoDelete.setAttribute("id", id);
  todoDelete.addEventListener("click", DeleteTodo)
  todoDelete.appendChild(deleteIcon);
  todoRight.appendChild(todoDelete);
  
  
  let todoInfo = document.createElement("div");
  let infoIcon = document.createElement("i")
  infoIcon.classList = "todo-info fa-solid fa-circle-info"
  todoInfo.setAttribute("id", id);
  todoInfo.appendChild(infoIcon);
  todoRight.appendChild(todoInfo);
  



  todo.appendChild(todoLeft);
  todo.appendChild(todoRight);
  projectBody.insertBefore(todo, addTodoButton);
}

function submitTodo() {
  const TodoDescriptionInput = document.querySelector(".todo-form-description-input")
  const TodoTitleInput = document.querySelector(".todo-form-title-input")
  const TodoDateInput = document.querySelector(".todo-form-date-input")

  currentProject.todoList.push(new Todo(TodoTitleInput.value, TodoDescriptionInput.value, TodoDateInput.value))

  RenderTodos();
}

function RenderTodos() {
  const allTodos = document.querySelectorAll(".todo")
  allTodos.forEach(todo => {todo.remove()})

  for (let i = 0; i < currentProject.todoList.length; i++) {
    CreateTodo(i)
  }
}

function ChangeChecked() {
  if (event.target.checked) {
    currentProject.todoList.forEach(todo => {
      if (event.target.id == todo.id) {
        todo.checked = true;
      } 
    })
  } else {
    currentProject.todoList.forEach(todo => {
      if (event.target.id == todo.id) {
        todo.checked = false;

      } 
    })
  }
}

function DeleteTodo() {
  let chosenTodoId = event.target.closest("div").id;
  let i = 0;
  
  currentProject.todoList.forEach(todo => {
    if (todo.id == chosenTodoId) {
      currentProject.todoList.splice(i, 1)
      return;
    } else {
      i++;
    }
  })
  RenderTodos();
}



export {CreateTodoForm, RenderTodos} ;