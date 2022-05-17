setURL('https://gruppe-235.developerakademie.net/smallest_backend_ever/');

async function init() {
  await downloadFromServer();
  tasks = JSON.parse(backend.getItem('tasks')) || [];

  console.log(tasks);

  await includeHTML();
}

async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}