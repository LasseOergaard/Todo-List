import {ToggleProjects, ToggleNavigation, AskProjectName} from "./navigation.js"


const headerHamburger = document.querySelector(".header__hamburger");
headerHamburger.addEventListener("click", ToggleNavigation);

const navigationProjects = document.querySelector(".navigation__projects");
navigationProjects.addEventListener("click", ToggleProjects);