const deleteProjectContent = () => {
    console.log('deleting content')
    const projectContent = document.getElementById('projectContent')
    projectContent.innerHTML = ''
}
export {deleteProjectContent}