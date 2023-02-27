
/* JS */
import {ToggleProjects, ToggleNavigation, AskProjectName} from "./navigation.js"
import "./header.js"

/* CSS */
import "./styles/header.css"
import "./styles/general.css"
import "./styles/navigation.css"
import "./styles/todoForm.css"
import "./styles/projectBody.css"
import "./styles/todo.css"

/* FONTS */
import '@fortawesome/fontawesome-free/js/all'

/* Event Listeners */
const headerHamburger = document.querySelector(".header__hamburger");
headerHamburger.addEventListener("click", ToggleNavigation);

const navigationProjects = document.querySelector(".navigation__projects");
navigationProjects.addEventListener("click", ToggleProjects);

const AddProjectButton = document.querySelector(".add-project");
AddProjectButton.addEventListener("click", AskProjectName);

