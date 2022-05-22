let tasks = [];

// let task = {
//     title: '',
//     category: '',
//     description: '',
//     urgency: '',
//     status: '',
//     user: ''
// };

let task = {
    title: '',
    category: '',
    description: '',
    date: '',
    urgenc: '',
    status: '',
    user: ''
};

let colorsOfUrgency = {
    low: '#61BD4F',
    medium: '#F2D600',
    high: '#EB5A46'
}


async function showBacklogTask() {
    await init();
    renderBacklogTasks();
}

function renderBacklogTasks() {
    let backlogtable = document.getElementById('backlogTable');
    backlogtable.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const backlogTask = tasks[i];
        const colorOfUrgency = colorsOfUrgency[backlogTask['urgency']];
        backlogtable.innerHTML += /*html*/ `
        
        <tbody>
        <tr id="liveAlertBtn"  class="taskButton" onclick="addToBoard()">
        <th id="urgency-img"  style="color: ${colorOfUrgency}">${tasks[i].urgency}</th>
        <td id="user"><svg class="task-profile" xmlns="http://www.w3.org/2000/svg" width="32"
                height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            <span class="">${users[i]}<br></a></span>
        </td>
        <td><a href="mailto:gabigibsnicht@mail.com">${users.userMail}</td>
        <td id="category">${tasks[i].category}</td>
        <td id="status">${tasks[i].status}</td>
        <td>${tasks[i].description}</td>
        <div id="liveAlertPlaceholder"></div>
    </tr>
    </tbody>`;
    }

}


function addToBoard() {

    // Push JSON to array "tasks" auf server
    task.status = 'todo';
    tasks.push(task);
    setArray('tasks', tasks);
    // await backend.setItem('tasks', JSON.stringify(tasks));
}

function setArray(key, array) {
    backend.setItem(key, JSON.stringify(array));
}

 