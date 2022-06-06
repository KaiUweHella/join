let colorsOfUrgency = {
  low: "../img/icons_google/low-icon.png",
  medium: "../img/icons_google/medium-icon.png",
  high: "../img/icons_google/high-icon.png"
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
      backlogtable.innerHTML += backlogTableHTML(i, colorOfUrgency);

      loadUser(i);
      // addToBoard(i);
    }
  }
}

function loadUser(i) {
  let task = tasks[i];

  for (let j = 0; j < task.user.length; j++) {
    const user = task.user[j];
    document.getElementById(`user-names${i}`).innerHTML += /*html*/ `
            <img class="user-img" src="${user.img}" alt="">
            <span class="user-name">${user.name}</span>
        `;
  }
  // addToBoard(i);
}



function addToBoard(i) {
  let dialogInfo = document.getElementById('dialog-info');
  let dialogBox = document.getElementById('dialog-box');
  dialogBox.style.display = "block";

  dialogInfo.innerHTML = `
    <div class="dialog-title">${tasks[i].title}</div>
      <div id="user-names${i}"></div>

        <div class="table-con"> 
            <table class="dialog-table">
                <tr>
                  <th>Category</th>
                  <td>${tasks[i].category}</td>
                </tr>

                <tr>
                  <th>Status</th>
                  <td>${tasks[i].status}</td>
                </tr>

                <tr>
                  <th>Details</th>
                  <td>${tasks[i].description}</td>
                </tr>
            </table>
        </div>

    <div>${tasks[i].date}</div>
    
    <div class="dialog-btn">
    <button class="close-btn" onclick="closeBox()">Close</button>
    <button class="add-btn" onclick="pushToBoard(${i})">Add to Board</button>
    </div>

  `;

  // pushToBoard();
}

function closeBox() {
  let closeDialog = document.getElementById('dialog-box')
  closeDialog.style.display = "none";
}



function pushToBoard(i) {
  tasks[i].status = "todo";
  setArray("tasks", tasks);
  renderBacklogTasks();
  addToBoard();

}

function setArray(key, array) {
  backend.setItem(key, JSON.stringify(array));
}



// function addToBoard(i) {
//   if (confirm("Aufgabe als todo einstellen")) {
//     tasks[i].status = "todo";
//     setArray("tasks", tasks);
//     renderBacklogTasks();
//   }
// }




// Aufgabe für Später

// window.onclick = function(event) {
//   if (event.target == dialogBox) {
//     dialogBox.style.display = "none";
//   }
// }