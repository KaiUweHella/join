

  async function showOverview(){
    await init();
    showCards();
  }

function showCards() {
  clearOverview();
  for (let i = 0; i < tasks.length; i++) {
    const element = tasks[i];
    let id = assignStatus(element);

    if(element.status != "backlog"){
      document.getElementById(id).innerHTML += cardHTML(element, i);
    }
  }
}

function clearOverview(){
  document.getElementById('inProgress').innerHTML = '';
  document.getElementById('testing').innerHTML = '';
  document.getElementById('todo').innerHTML = '';
  document.getElementById('done').innerHTML = '';
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

function startDragging(i){
 currentId = i;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function moveTo(category){
  tasks[currentId]['status'] = category;

  setArray('tasks', tasks);
  
  showCards();
}

function highlight(id){
  document.getElementById(id).classList.add('drag-erea-highlight');
}

function removeHighlight(id){
  document.getElementById(id).classList.remove('drag-erea-highlight');
}

function setArray(key, array) {
  backend.setItem(key, JSON.stringify(array));
}

function getArray(key) {
  return JSON.parse(backend.getItem(key));
}