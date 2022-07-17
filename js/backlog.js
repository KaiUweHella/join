let colorsOfUrgency = {
  low: "../img/icons_google/low-icon.png",
  medium: "../img/icons_google/medium-icon.png",
  high: "../img/icons_google/high-icon.png"
}

async function showBacklogTask() {
  await init();
  renderBacklogTasks();
}

function renderBacklogTasks() {
  let backlogtable = document.getElementById("backlogTable");
  backlogtable.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const backlogTask = tasks[i];
    const colorOfUrgency = colorsOfUrgency[backlogTask["urgency"]];
    if (backlogTask.status == "backlog") {
      backlogtable.innerHTML += backlogTableHTML(i, colorOfUrgency);
    }
  }
}

function loadUser(i) {
  let task = tasks[i];

  for (let j = 0; j < task.user.length; j++) {
    const user = task.user[j];
    document.getElementById(`user-names${i}`).innerHTML += /*html*/ `
    <div class="user-images-names">
         <img class="user-img" src="${user.img}" alt="">
         <span class="user-name">${user.name}</span>
    </div>
        `;
  }
  // addToBoard(i);
}


function addToBoard(i) {
  let dialogInfo = document.getElementById('dialog-info');
  let dialogBox = document.getElementById('dialog-box');
  dialogBox.style.display = "flex";

  dialogInfo.innerHTML = /*html*/  `
    <div class="dialog-title">${tasks[i].title}</div>
      <div class="user-box-dialog">
          <span class="gray-color">Added to</span>
          <span class="user-names-dialog" id="user-names${i}"></span>
      </div>
        <div class="table-con"> 
          <div class="info-table">
            <table class="dialog-table">
                  <tr>
                    <th>Category</th>
                    <td class="font-variant">${tasks[i].category}</td>
                  </tr>

                  <tr>
                    <th>Status</th>
                    <td>${tasks[i].status}</td>
                  </tr>

                  <tr></tr>
                    <th class="display-block">Details</th>
                    <td>${tasks[i].description}</td>
                  </tr>
              </table>
            
          </div>
    <div class="date-con">${tasks[i].date}</div>
    
    <div class="dialog-btn">
    <button class="close-btn" onclick="closeBox()">Close</button>
    <button class="add-btn" onclick="pushToBoard(${i})">Add to Board</button>
    </div>
  `;

  loadUser(i);
}

function closeBox() {
  let closeDialog = document.getElementById('dialog-box')
  closeDialog.style.display = "none";
}

function pushToBoard(i) {
  tasks[i].status = "todo";
  if (tasks[i].status = "todo") {
     setTimeout(function () {
      closeBox();
     }, 1000);
  }
  setArray("tasks", tasks);
  // renderBacklogTasks();
  addToBoard(i);

}

function setArray(key, array) {
  backend.setItem(key, JSON.stringify(array));
}
