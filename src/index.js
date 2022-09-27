import { loadInitialPage } from './pages/loadInitialPage'
import { Project } from './functions/project'
import { Task } from './functions/task'
import './style.css'
import { is } from 'date-fns/locale';

const content = document.createElement('div')
content.classList.add('content')
content.setAttribute("id", "content")
document.body.appendChild(content)

//add logic to see if there are saved tasks/projects here
if (!localStorage.getItem('projectList')) {
  localStorage.setItem('projectList', JSON.stringify([]))
  loadInitialPage([]);
} else {
  // localStorage.setItem('projectList', JSON.stringify([]))
  const retrieveList = JSON.parse(localStorage.getItem('projectList'));
  let projectList = [];
  if (retrieveList.length != 0) {
    for (let proj of retrieveList) {
      const title = proj.title;
      const desc = proj.desc;
      const tasks = proj.tasks;
      proj = Project(title, desc, tasks)
      let taskList = [];
      for (let task of proj.getTasks()) {
        const title = task.title;
        const desc = task.desc;
        const priority = task.priority;
        const isComplete = task.isComplete;
        let tempTask = Task(title,desc,priority,isComplete);
        taskList.push(tempTask);
      }
      proj.setTasks(taskList);
      projectList.push(proj);
    }
  }
  loadInitialPage(projectList);
}