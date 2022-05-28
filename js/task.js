async function showOverview() {
  await init();
  showCards();
}

function showCards() {
  clearOverview();
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    let id = assignStatus(task);

    if (task.status != "backlog") {
      document.getElementById(id).innerHTML += cardHTML(task, i);

      if (task.user.length > 2) {
        document.getElementById(`number-of-member${i}`).innerHTML =
          memberNUmberHTML(task.user.length - 2);
      }
      if (task.user.length > 0) {
        loadImgOfMember(task, i);
      }
    }
  }
}

function loadImgOfMember(task, j) {
  for (let i = 0; i <= 1; i++) {
    let user = task.user[i];
    console.log(user.img);
    if (user) {
      document.getElementById(`task-member${j}`).innerHTML += memberHTML(
        user.img
      );
    }
  }
}

function showMembers(i) {
  let task = tasks[i];
  document.getElementById(`member-overview${i}`).innerHTML = "";
  document.getElementById(`member-overview${i}`).classList.remove("d-none");
  for (let j = 0; j < task.user.length; j++) {
    const user = task.user[j];
    document.getElementById(`member-overview${i}`).innerHTML +=
      memberOverviewHTML(user.img);
  }
}

function hideMembers(i) {
  document.getElementById(`member-overview${i}`).classList.add("d-none");
}

function clearOverview() {
  document.getElementById("inProgress").innerHTML = "";
  document.getElementById("testing").innerHTML = "";
  document.getElementById("todo").innerHTML = "";
  document.getElementById("done").innerHTML = "";
}

function assignStatus(element) {
  if (element.status == "todo") {
    let id = "todo";
    return id;
  }
  if (element.status == "inProgress") {
    let id = "inProgress";
    return id;
  }
  if (element.status == "testing") {
    let id = "testing";
    return id;
  }
  if (element.status == "done") {
    let id = "done";
    return id;
  }
}

let currentId = [];

function startDragging(i) {
  currentId = i;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function moveTo(category) {
  tasks[currentId]["status"] = category;

  setArray("tasks", tasks);

  showCards();
}

function highlight(id) {
  document.getElementById(id).classList.add("drag-erea-highlight");
}

function removeHighlight(id) {
  document.getElementById(id).classList.remove("drag-erea-highlight");
}

function setArray(key, array) {
  backend.setItem(key, JSON.stringify(array));
}

function getArray(key) {
  return JSON.parse(backend.getItem(key));
}
