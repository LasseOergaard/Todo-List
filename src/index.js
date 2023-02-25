
/* JS */
import {ToggleProjects, ToggleNavigation, AskProjectName} from "./navigation.js"
import { TodoForm } from "./todo.js"
import "./header.js"
import "./todo.js"

/* CSS */
import "./styles/header.css"
import "./styles/general.css"
import "./styles/navigation.css"
import "./styles/todo.css"

/* FONTS */
import '@fortawesome/fontawesome-free/js/all'

/* Event Listeners */
const headerHamburger = document.querySelector(".header__hamburger");
headerHamburger.addEventListener("click", ToggleNavigation);

const headerAddTodo = document.querySelector(".header__plus")
headerAddTodo.addEventListener("click", TodoForm)

const navigationProjects = document.querySelector(".navigation__projects");
navigationProjects.addEventListener("click", ToggleProjects);

const AddProjectButton = document.querySelector(".add-project");
AddProjectButton.addEventListener("click", AskProjectName);