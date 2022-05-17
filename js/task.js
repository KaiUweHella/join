let users = [
  {
    name: "Kai",
    img: "url",
    mail: "",
    password: "",
  },
  {
    name: "Brett",
    img: "url",
    mail: "",
    password: "",
  },
  {
    name: "Amar",
    img: "url",
    mail: "",
    password: "",
  },
];

function showCards() {
  for (let i = 0; i < tasks.length; i++) {
    const element = tasks[i];
    let id = assignStatus(element);

    if(element.status != "backlog"){
      document.getElementById(id).innerHTML += cardHTML(element);
    }
  }
}

function assignStatus(element) {
  if (element.status == "todo") {
    let id = "todo";
    return id;
  }
  if (element.status == "in progress") {
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
