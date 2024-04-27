// Univseral
let print = (value) => console.log(value)


// Sidebar Elements
const sidebar = document.getElementById('sidebar');
const toggle_btn = document.getElementById('toggle-menu')
const menu = document.getElementById('menu');
const search = document.getElementById('search');
const taskContainers = document.querySelectorAll('.sidebar-container');

// Main page Elements
const main = document.getElementById('main');


// Event Handlers
toggle_btn.addEventListener('click', function() {
    if (sidebar.style.width === '300px') {
        collapseSidebar();
    }
    else {
        expandSidebar();
    }
});

// Toggle Side bar 
function expandSidebar() {
    sidebar.style.width = '300px';
    sidebar.style.border = '2px solid black';
    main.style.marginLeft = '300px';
    showElements([menu, search, ...taskContainers]);
}

function collapseSidebar() {
    sidebar.style.width = '50px';
    sidebar.style.border = '2px solid black';
    main.style.marginLeft = '50px';
    hideElements([menu, search, ...taskContainers]);
}

function showElements(elements) {
    elements.forEach(element => {
        if (element.classList.contains('sidebar-container')) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'flex';
        }
    });
}

function hideElements(elements) {
    elements.forEach(element => {
        element.style.display = 'none';
    });
}


// ---------------------------------------------

// Task Elements
const today = document.getElementById('today');
const upcoming = document.getElementById('upcoming');
const sticky_note = document.getElementById('sticky_note');
const calendar = document.getElementById('calendar');
const currElem = document.getElementById('current_element');


today.addEventListener('click', changeCurrentElement);
upcoming.addEventListener('click', changeCurrentElement);
sticky_note.addEventListener('click', changeCurrentElement);
calendar.addEventListener('click', changeCurrentElement);


// Change the [current element] box
function changeCurrentElement(event) {
    let element = event.target;
    if (element.id == 'today') {
        currElem.innerHTML = `Today's Tasks`
    }
    else if (element.id == 'upcoming') {
        currElem.innerHTML =   `Upcoming Tasks`
    }
    else if (element.id == 'sticky_note') {
        currElem.innerHTML =   `Sticky Notes`
    }
    else if (element.id == 'calendar') {
        currElem.innerHTML =   `Calendar`
    }
    else {
        console.log("Error didn't work!")
    }
}

// -----------------------------------------------
// Task Class 

class Task {

    constructor(task_name = "Task Name - ex", task_description = "Task Description - ex", list_name = "List name - ex", tag_name = "Tag name -ex ") {
        this.task_name = task_name;
        this.task_description = task_description;
        this.list_name = list_name;
        this.tag_name = tag_name;
    } 

    get taskName() {
        return this.task_name;
    }

    set changeTask(newTask) {
        this.task_name = newTask;
    }

    get taskDescription() {
        return this.task_description;
    } 

    set changeDescription(newDescription) {
        this.task_description = newDescription;
    }

    get listName() {
        return this.list_name;
    }

    set changeListName(newList) {
        this.list_name = newList;
    }

    get tagName() {
        return this.tag_name;
    }

    set changeTagName(newTag) {
        this.tag_name = newTag;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let currentTask = new Task();

    // Listen for task name changes
    document.getElementById('task-name').addEventListener('input', function() {
        currentTask.changeTask = this.value;
    });

    // Listen for task description changes
    document.getElementById('desc').addEventListener('input', function() {
        currentTask.changeDescription = this.value;
    });

    // Listen for list selection changes
    document.getElementById('list-selection').addEventListener('change', function() {
        currentTask.changeListName = this.value;
    });

    // Listen for tag selection changes
    document.getElementById('tag-selection').addEventListener('change', function() {
        currentTask.changeTagName = this.value;
    });

    // Optional: add listeners for save and delete buttons
    document.getElementById('save').addEventListener('click', function() {
        console.log('Task saved:', currentTask);
        // Additional code to handle saving the task data
    });

    document.getElementById('delete').addEventListener('click', function() {
        console.log('Task deleted');
        // Additional code to handle task deletion
    });
});
