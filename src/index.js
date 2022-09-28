import { loadInitialPage } from './pages/loadInitialPage';
import { Project } from './functions/project';
import { Task } from './functions/task';
import './style.css';

const content = document.createElement('div');
content.classList.add('content');
content.setAttribute('id', 'content');
document.body.appendChild(content);

// add logic to see if there are saved tasks/projects here
if (!localStorage.getItem('projectList')) {
  localStorage.setItem('projectList', JSON.stringify([]));
  loadInitialPage([]);
} else {
  // localStorage.setItem('projectList', JSON.stringify([]))
  const retrieveList = JSON.parse(localStorage.getItem('projectList'));
  const projectList = [];
  if (retrieveList.length != 0) {
    for (let proj of retrieveList) {
      const { title } = proj;
      const { desc } = proj;
      const { tasks } = proj;
      proj = Project(title, desc, tasks);
      const taskList = [];
      for (const task of proj.getTasks()) {
        const { title } = task;
        const { desc } = task;
        const { priority } = task;
        const { isComplete } = task;
        const tempTask = Task(title, desc, priority, isComplete);
        taskList.push(tempTask);
      }
      proj.setTasks(taskList);
      projectList.push(proj);
    }
  }
  loadInitialPage(projectList);
}
