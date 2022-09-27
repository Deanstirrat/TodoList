const Task = (title, description, priority, isComplete) => {

    //Getters
    const getTitle = () => {
        return title
    }
    const getDescription = () => {
        return description
    }
    // const getDueDate = () => {
    //     return dueDate
    // }
    const getPriority = () => {
        return priority
    }
    const getIsComplete = () =>{
        return isComplete
    }

    //Setters
    const toggleIsComplete = () =>{
        isComplete = !isComplete;
    }

    return{title: title, description: description, priority: priority, isComplete: isComplete, getTitle, getDescription, getPriority, getIsComplete, toggleIsComplete}
}

export { Task }