//define UI variable
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listener
loadEventListener();

//add task event
function loadEventListener() {
    //add task 
    form.addEventListener('submit', addTask);
    //remove task
    taskList.addEventListener('click', removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTask)
}

//Add task
function addTask(e) {

    if (taskInput.value === '') {
        alert('Add a task');
    }

    //create li element
    const li = document.createElement('li');
    //add class
    li.className = "collection-item";
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value))

    //create link element
    const link = document.createElement('a');

    //add class
    link.className = "delete-item secondary-content"
    link.innerHTML = "<i class='fa fa-remove'></i>"

    //add link into li
    li.appendChild(link);

    //add li into ul
    taskList.appendChild(li)

    //clear task input
    taskInput.value = ''

    e.preventDefault();
}

//remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove()
        }
    }
}

//clear task
function clearTask(e) {
    // taskList.innerHTML = ''

    //faster way
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}