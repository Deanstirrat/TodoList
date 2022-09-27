import Tick from '../assets/tick.png';
import { createNewTask } from '../functions/createNewTask';
import { updateLocalStorage, updateLocalStorageTask } from '../functions/updateLocalStorage';
import { deleteProjectContent } from '../functions/deleteProjectContent';

const loadProjectContent = (project) => {
    const projectContent = document.getElementById('projectContent')
    const tasks = project.getTasks();
    //add all tasks
    for (let task of tasks) {
        const title = task.getTitle();
        const description = task.getDescription();
        const complete = task.getIsComplete();

        const taskContainer = document.createElement('div')
        taskContainer.classList.add('task-container')
        const taskTitle = document.createElement('p')
        taskTitle.textContent = title
        taskContainer.appendChild(taskTitle)

        if (complete) {
            const picture = new Image();
            picture.classList.add('check-icon')
            picture.src = Tick;
            taskContainer.appendChild(picture);
            taskContainer.classList.add('complete')
        }else{
            taskContainer.classList.add('incomplete')
            const checkBox = document.createElement('input')
            checkBox.type = 'checkbox';
            checkBox.name = taskTitle;
            checkBox.addEventListener('change', ()=>{
                project.setTasks(project.getTasks().filter( function(el) { return el.title != task.title; } ));
                project.tasks = project.tasks.filter( function(el) { return el.title != task.title; } )
                updateLocalStorageTask(project);
                deleteProjectContent();
                loadProjectContent(project);
            })
            taskContainer.appendChild(checkBox)
        }
        projectContent.appendChild(taskContainer)
    }

    //new task button
    const newTaskButton = document.createElement('button');
    newTaskButton.innerHTML = 'Add task'
    newTaskButton.classList.add('new-task-button')
    newTaskButton.id = 'newTaskButton'
    newTaskButton.addEventListener('click', ()=>{
        console.log('new Task')
        const newTaskForm = createNewTask(project)
        projectContent.appendChild(newTaskForm)
        newTaskButton.classList.add('hidden')
    })
    projectContent.appendChild(newTaskButton)
    
}

export { loadProjectContent }