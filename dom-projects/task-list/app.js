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
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task 
    form.addEventListener('submit', addTask);
    //remove task
    taskList.addEventListener('click', removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTask);
    //filter task event
    filter.addEventListener('keyup', filterTask);
}

function getTasks() {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task) {
        //create li element
        const li = document.createElement('li');
        //add class
        li.className = "collection-item";
        //create text node and append to li
        li.appendChild(document.createTextNode(task));

        //create link element
        const link = document.createElement('a');

        //add class
        link.className = "delete-item secondary-content"
        link.innerHTML = "<i class='fa fa-remove'></i>"

        //add link into li
        li.appendChild(link);

        //add li into ul
        taskList.appendChild(li)
    })

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
    li.appendChild(document.createTextNode(taskInput.value));

    //create link element
    const link = document.createElement('a');

    //add class
    link.className = "delete-item secondary-content"
    link.innerHTML = "<i class='fa fa-remove'></i>"

    //add link into li
    li.appendChild(link);

    //add li into ul
    taskList.appendChild(li)

    //store in LS
    storeTaskInLocalStorage(taskInput.value);
    //clear task input
    taskInput.value = ''

    e.preventDefault();
}

//store task
function storeTaskInLocalStorage(task) {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

//remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove()

            //remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }

        localStorage.setItem('tasks', JSON.stringify(tasks))
    })
}
//clear task
function clearTask(e) {
    // taskList.innerHTML = ''

    //faster way
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)

        //remove from LS
        clearTaskFromLocalStorage();
    }
}

//clear task from LS
function clearTaskFromLocalStorage(taskList) {
    localStorage.clear()
}

//meaing of firstChild -> there is something in the list
//filter task
function filterTask(e) {
    const text = e.target.value;

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}