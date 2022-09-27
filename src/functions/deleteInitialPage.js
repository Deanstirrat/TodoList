const deleteInitialPage = () => {
    console.log('deleting page')
    const content = document.getElementById('content')
    content.innerHTML = ''
}
export {deleteInitialPage}