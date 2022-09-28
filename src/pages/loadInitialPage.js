import { loadProjectContent } from './loadProjectContent';
import { deleteProjectContent } from '../functions/deleteProjectContent';
import { createNewProject } from '../functions/createNewProject';

const loadInitialPage = (projectList) => {
  const content = document.getElementById('content');
  const header = document.createElement('div');
  header.classList.add('header');
  const sideBar = document.createElement('div');
  sideBar.classList.add('sidebar');
  // header content
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'Todo List';
  headerTitle.classList.add('header-title');
  header.appendChild(headerTitle);
  // sidebar contents
  const projectsHeading = document.createElement('h2');
  projectsHeading.textContent = 'Projects:';
  projectsHeading.classList.add('projects-heading');
  sideBar.appendChild(projectsHeading);

  const projectButtonsContainer = document.createElement('div');
  projectButtonsContainer.classList.add('project-buttons-container');
  sideBar.appendChild(projectButtonsContainer);

  const projectContent = document.createElement('div');
  projectContent.classList.add('project-content');
  projectContent.setAttribute('id', 'projectContent');

  content.appendChild(header);
  content.appendChild(sideBar);
  content.appendChild(projectContent);

  // create all buttons for projects
  for (let i = 0; i < projectList.length; i++) {
    const projectButton = document.createElement('button');
    projectButton.classList.add('project-button');
    projectButton.textContent = projectList[i].getTitle();
    projectButton.id = projectList[i];
    projectButton.addEventListener('click', () => {
      const buttons = document.querySelectorAll('.project-button');
      buttons.forEach((button) => {
        button.classList.remove('selected');
      });
      projectButton.classList.add('selected');
      deleteProjectContent();
      loadProjectContent(projectList[i]);
    });
    projectButtonsContainer.appendChild(projectButton);
  }
  const newProjectButton = document.createElement('button');
  newProjectButton.innerHTML = 'New project';
  newProjectButton.classList.add('new-project-button');
  newProjectButton.id = 'newProjectbutton';
  newProjectButton.addEventListener('click', () => {
    newProjectButton.classList.add('hidden');
    projectButtonsContainer.appendChild(createNewProject(projectList));
  });
  projectButtonsContainer.appendChild(newProjectButton);
};

export { loadInitialPage };
