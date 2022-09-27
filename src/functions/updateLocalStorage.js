import { Project } from "./project";
import { Task } from './task'

const updateLocalStorage = (listToStore) => {
    console.log('localStorage - adding new project');
    const stringListToStore = JSON.stringify(listToStore);
    localStorage.setItem('projectList', stringListToStore);
}

const updateLocalStorageTask = (project) => {
    let projectList = []
    console.log('localStorage - adding new task')
    const retrieveList = JSON.parse(localStorage.getItem('projectList'));
    for (let proj of retrieveList) {
        const title = proj.title;
        const desc = proj.desc;
        const tasks = proj.tasks;
        proj = Project(title, desc, tasks);
        let taskList = [];
        for (let task of proj.getTasks()) {
            const title = task.title;
            const desc = task.desc;
            const priority = task.priority;
            const isComplete = task.isComplete;
            let tempTask = Task(title, desc, priority, isComplete);
            taskList.push(tempTask);
        }
        proj.setTasks(taskList);
        projectList.push(proj);
    }

    let newList = projectList.filter(function(el) { return el.getTitle() != project.getTitle(); });
    newList.push(project);
    updateLocalStorage(newList);
}

export { updateLocalStorage, updateLocalStorageTask }