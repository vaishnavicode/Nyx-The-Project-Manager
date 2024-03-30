const title = document.querySelector('#title');
const details = document.querySelector('#details');
const startDate = document.querySelector('#startDate')
const dueDate = document.querySelector('#dueDate');
const Technology = document.querySelector('#technology');
const priority = document.querySelector('#priority');
const container = document.querySelector('.error-container');

const form = document.querySelector('#form').addEventListener('submit', e => {
    //check for id
    let id;
    if (localStorage.getItem('projects') === null) {
        id = 0;
    } else {
        id = JSON.parse(localStorage.getItem('projects')).length;
    }
    //add to localStorage
    const project = {
        id: id,
        title: title.value,
        details: details.value,
        priority: priority.value,
        technology: technology.value,
        startDate: startDate.value,
        dueDate: dueDate.value,
        done: false
    }
    storeProjectToLocalStorage(project);
    //increase the id by one
    id++;
    e.preventDefault();
})
// function to add projects to local storage
function storeProjectToLocalStorage(project) {
    let projects;
    if (localStorage.getItem('projects') === null) {
        projects = [];
    } else {
        projects = JSON.parse(localStorage.getItem('projects'));
    }
    // validate the form first before adding to localstorage
    if (ValidateInput(project)) { return true }
    //push the project to the projects array;
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    clearInput();
    displayAlert('Project Added Successfully', 'alert-success');
    window.location = 'index.html';

}
// function to display an alert if there is any
function displayAlert(message, className) {
    // create a div element
    const div = document.createElement('div');
    // add a class name to the div
    div.className = `alert ${className}`;
    // create a text node
    const text = document.createTextNode(message);
    //append the textnode to the div
    div.appendChild(text);
    const container = document.querySelector('.error-container');
    const form = document.querySelector('#form');
    form.insertBefore(div, container);
    setTimeout(() => {
        div.classList.remove(className);
    }, 4000);
}
// function to  clear the form
function clearInput() {
    title.value = '';
    details.value = '';
    priority.value = '';
    technology.value = '';
    startDate.value = '';
    dueDate.value = '';

}
function ValidateInput(object) {
    // ensure non of the form field is empty an must all be correct
    if (object.title == '' || object.details == '' || object.priority == '' || object.technology == ''
        || object.startDate == '' || object.dueDate == '') {
        displayAlert('Form Field Cant Be empty', 'alert-danger')
    } else {
        return false;
    }

    return true;
}
