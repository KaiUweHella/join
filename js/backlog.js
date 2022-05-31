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
      backlogtable.innerHTML += backlogTableHTML(i, colorOfUrgency);

      loadUser(i);
    }
  }
}

function loadUser(i) {
  let task = tasks[i];

  for (let j = 0; j < task.user.length; j++) {
    const user = task.user[j];
    document.getElementById(`user-names${i}`).innerHTML += /*html*/ `
            <img class="user-img"  src="${user.img}" alt="">
            <span class="">${user.name}</span>
        `;
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
