import { Project } from './project';
import { deleteInitialPage } from './deleteInitialPage';
import { loadProjectContent } from '../pages/loadProjectContent';
import { loadInitialPage } from '../pages/loadInitialPage';
import { updateLocalStorage } from './updateLocalStorage';

const createNewProject = (projectList) => {
  // create a form to collect info. When submited, delete content and call load project contents
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('new-project-form');
  const projectTitleInput = document.createElement('input');
  projectTitleInput.type = 'text';
  projectTitleInput.required = true;
  projectTitleInput.placeholder = 'Project name';
  const submitProjectButton = document.createElement('input');
  submitProjectButton.type = 'submit';
  submitProjectButton.classList.add('submit-project-button');
  projectTitleInput.classList.add('project-text-input');
  newProjectForm.appendChild(projectTitleInput);
  newProjectForm.appendChild(submitProjectButton);

  newProjectForm.addEventListener('submit', () => {
    console.log('form sumbitted');
    const newProject = Project(projectTitleInput.value, '', []);
    projectList.push(newProject);
    // update lcoal storage
    updateLocalStorage(projectList);
    deleteInitialPage();
    loadInitialPage(projectList);
    loadProjectContent(newProject);
    document.getElementById('newProjectbutton').classList.remove('hidden');
  });

  return newProjectForm;
};
export { createNewProject };
