let colorsOfUrgency = {
    low: "#61BD4F",
    medium: "#F2D600",
    high: "#EB5A46",
};

async function showBacklogTask() {
    await init();
    renderBacklogTasks();
}


function renderBacklogTasks() {
    let backlogtable = document.getElementById("backlogTable");
    backlogtable.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        
        const backlogTask = tasks[i];
        // const user = users;
        const colorOfUrgency = colorsOfUrgency[backlogTask["urgency"]];
        if (backlogTask.status == "backlog") {
            backlogtable.innerHTML += /*html*/ `
        <tbody>
            <tr id="liveAlertBtn"  class="taskButton" onclick="addToBoard(${i})">
                <td class="priority-con" data-label="Priority" id="urgency-img"  style="color: ${colorOfUrgency}">${tasks[i].urgency}</td>
                <td data-label="User" class="user-img" id="user"><img src="${users[1].img}" alt="">
                <span class="">${users[1].name}</span>
                </td>
                <td data-label="Mail"><a href="mailto:gabigibsnicht@mail.com">${users[1].mail}</td>
                <td data-label="Category" id="category">${tasks[i].category}</td>
                <td data-label="Status" id="status">${tasks[i].status}</td>
                <td data-label="Details">${tasks[i].description}</td>
                <div id="liveAlertPlaceholder"></div>
            </tr>
        </tbody>`;

        }
    }
}

function addToBoard(i) {
    if (confirm("Aufgabe als todo einstellen")) {
        tasks[i].status = "todo";
        setArray("tasks", tasks);
        renderBacklogTasks();
    }
}

function setArray(key, array) {
    backend.setItem(key, JSON.stringify(array));
}

