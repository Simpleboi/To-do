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


