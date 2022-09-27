const Project = (title, description, tasks) => {

    //Getters
    const getTitle = () => {
        return title
    }
    const getDescription = () => {
        return description
    }
    const getTasks = () =>{
        return tasks
    }

    //setters
    const addTask = (task) => {
        tasks.push(task);
    }
    const clearTasks = ()=>{
        tasks = [];
    }
    const setTasks = (newTasks)=>{
        tasks = newTasks;
    }
    const removeTask = (task) => {
        tasks = tasks.filter( function(el) { return el != task; } )
    }

    return{title: title, description: description, tasks: tasks, getTitle, getDescription, getTasks, addTask, clearTasks, setTasks, removeTask}
}

export { Project }