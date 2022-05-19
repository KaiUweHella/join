// let users = [
//     {
//         name: 'Kai',
//         img : 'url',
//         mail : '',
//         password : '',
//     },{
//         name: 'Brett',
//         img : 'url',
//         mail : '',
//         password : '',
//     },{
//         name: 'Amar',
//         img : 'url',
//         mail : '',
//         password : '',
//     }
// ];

// MEINE JAVASCRIPT

// let colorsOfUrgency = {
//     0: '#61BD4F',
//     1: '#F2D600',
//     2: '#EB5A46',
// }


let tasks = [];
setURL('https://gruppe-235.developerakademie.net/smallest_backend_ever/');


async function init() {
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks'));
    console.log('all tasks', tasks);
    renderBacklogTasks();
}

function renderBacklogTasks() {
    // let backlogTables = document.getElementById('backlogTable').value;

    // backlogTable.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        backlogTable.innerHTML += /*html*/ `
        
        <tbody>

        <tr id="liveAlertBtn">
        <th id="">${tasks[i].urgency}</th>
        <td id="user"><svg class="task-profile" xmlns="http://www.w3.org/2000/svg" width="32"
                height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            <span class="">${users[i]}<br></a></span>
        </td>
        <td><a href="mailto:gabigibsnicht@mail.com">gabigibsnicht@mail.com</td>
        <td id="category">${tasks[i].category}</td>
        <td id="status">${tasks[i].status}</td>
        <td>${tasks[i].description}</td>
        <div id="liveAlertPlaceholder"></div>
    </tr>
    </tbody>`;

    }
}