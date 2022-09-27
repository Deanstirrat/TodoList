import { loadProjectContent } from '../pages/loadProjectContent';
import { Task } from './task'
import  { deleteProjectContent } from './deleteProjectContent'
import { updateLocalStorageTask } from './updateLocalStorage';

const createNewTask = (project) => {
    //create a form to collect info. When submited, delete content and call load project contents
    const newTaskForm = document.createElement('form');
    newTaskForm.classList.add('new-task-form')
    const taskTitleInput = document.createElement('input');
    taskTitleInput.type = 'text';
    taskTitleInput.required = true;
    taskTitleInput.placeholder = 'Task'

    const taskDescriptionInput = document.createElement('input')
    taskDescriptionInput.type = 'text';
    taskDescriptionInput.placeholder = 'Description';

    const taskDateInput = document.createElement('input');
    taskDateInput.type = 'date'
    taskDateInput.required = true;

    const submitTaskButton = document.createElement('input');
    submitTaskButton.type='submit';
    //classes
    taskTitleInput.classList.add('task-text-input');
    taskDescriptionInput.classList.add('task-text-input');
    taskDateInput.classList.add('task-date-input');
    submitTaskButton.classList.add('task-submit-button')

    newTaskForm.addEventListener('submit', ()=>{
        let newTask = Task(taskTitleInput.value, taskDescriptionInput.value, '', false)
        project.addTask(newTask);
        project.tasks.push(newTask)
        updateLocalStorageTask(project);
        deleteProjectContent()
        loadProjectContent(project);
        document.getElementById('newTaskButton').classList.remove('hidden')
    })

    //append
    newTaskForm.appendChild(taskTitleInput)
    newTaskForm.appendChild(taskDescriptionInput)
    newTaskForm.appendChild(submitTaskButton)
    return newTaskForm;
}
export {createNewTask}