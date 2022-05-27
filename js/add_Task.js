let selectUser = [];

function loadImages() {
  if (selectUser != []) {
    document.getElementById("user-img").innerHTML = "";
    for (let i = 0; i < selectUser.length; i++) {
      let userName = selectUser[i].name;
      document.getElementById(
        "user-img"
      ).innerHTML += `                                    
      <div style="display: flex; flex-direction: column; align-items: center;">
      <img class="avatar" src="./img/avatar.png">
      <span>${userName}</span>
  </div>`;
    }
  }
}

// jsdoc: npm install -g jsdoc

/**
 * This function reads input data from addTasks form pushes input to JSON-array then saves this array in localstorage
 *
 * @param {string} event - on event here summit button click the default funtcion of the form is prevented so that processes in console can be seen and the page is not automatically reloaded.
 */


function addTask(event) {
  // function to prevent the default function of form being carried out
  event.preventDefault();

  // Variables for form objects to be saved in JSON
  let title = document.getElementById("title");
  let category = document.getElementById("category");
  let description = document.getElementById("description");
  let date = document.getElementById("due-date");
  let urgency = document.getElementById("urgency");
  //   let user = document.getElementById('selectedUser');

  createJsonArrayForTask(title, category, description, date, urgency);
  resetFormObjects(title, category, description, date, urgency);

  document.getElementById(
    "confirm-text"
  ).innerHTML = /*html*/ `Task assigned successfully`;

  setTimeout(function () {
    document.getElementById("confirm-text").innerHTML = "";
  }, 2000);

  selectUser = [];
  loadImages();
}


/**
 * This function creates a JSON for the form inputs and pushes this JSON into array "allTasks"
 *
 * @param {string} title - task name
 * @param {string} category - task category
 * @param {string} description - task description
 * @param {string} date - due date as string
 * @param {string} urgency task urgency
 */



function createJsonArrayForTask(title, category, description, date, urgency) {
  // Variables saved as JSON , with .value the value of the form object is returned (writen this way so that the form can then be reset).
  let description2 = document.getElementById("description").value;
  console.log("des", description2);

  let task = {
    title: title.value,
    category: category.value,
    description: description.value,
    date: date.value,
    urgency: urgency.value,
    status: "backlog",
    user: selectUser,
  };
  // Push JSON to array "tasks" auf server
  tasks.push(task);
  setArray("tasks", tasks);
  console.log(tasks);
}

/**
 * This function resets all inputs in addTask form
 *
 * @param {string} title - task name
 * @param {string} category - task category
 * @param {string} description - task description
 * @param {string} date - due date as string
 * @param {string} urgency task urgency
 */
function resetFormObjects(title, category, description, date, urgency) {
  // Reset form objects
  title.value = "";
  category.value = "";
  description.value = "";
  date.value = "";
  urgency.value = "";
}

/**
 * This function brings up dialog box with users to assign to the task (From array users in this js file)
 *
 * @param {string} i - user number
 */
function showUser(i) {
  //clear previous content
  document.getElementById("user-container").innerHTML = "";
  // Remove hidden class
  document.getElementById("bg-grey").classList.remove("d-none");
  // Iterate through users
  for (let i = 0; i < users.length; i++) {
    let userName = users[i]["name"];
    let userImg = users[i]["img"];
    let userMail = users[i]["mail"];

    //add data to dialogbox
    document.getElementById("user-container").innerHTML += /*html*/ `
      <!-- <div class="individualUser" onclick="addUser(${i}, '${userName}')"> -->
      <div class="individualUser" onclick="addUser(${i})">
         <img class="avatar" src="${userImg}">
         <div class="userDetails">
            <span class="userName">${userName}</span>
            <span class="userName">${userMail}</span>
         </div>
         <!-- div for check symbol -->
         <div id="checked_${i}"></div>
      </div>`;
  }
  showCheckUp();
}

/**
 * This function adds selected user to textarea in form to be submitted
 *
 * @param {string} i - for testing only
 * @param {string} userName - user name form function "addUser" (div within popup dialogbox)
 */
// function addUser(i, userName) {
//    document.getElementById('selectedUser').innerHTML += userName;
//    //add check symbol next to selected user
//    document.getElementById(`checked_${i}`).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle svg-check" viewBox="0 0 16 16">
//    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
//    </svg>`
//     //closes dialogbox after 500ms
//    // setTimeout(function(){
//    // closeUserDialog()
//    // console.log('useri', i)
//    // console.log('user', userName)
//    // }, 500);

// }
function addUser(i) {
  let userInfo = users[i];
  let userName = users[i].name;
  //add check symbol next to selected user

  for (let i = 0; i < selectUser.length; i++) {
    const element = selectUser[i];

    if (userName == element.name) {
      console.log("User würde schon hinzugefügt");
      return;
    }
  }

  selectUser.push(userInfo);

  console.log(selectUser);
  loadImages();
  showCheckUp();

  //closes dialogbox after 500ms
  // setTimeout(function(){
  // closeUserDialog()
  // console.log('useri', i)
  // console.log('user', userName)
  // }, 500);
}

function showCheckUp() {
  for (let i = 0; i < users.length; i++) {
    const userName = users[i].name;
    for (let j = 0; j < selectUser.length; j++) {
      const selectedUserName = selectUser[j].name;
      if (userName == selectedUserName) {
        document.getElementById(
          `checked_${i}`
        ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle svg-check" viewBox="0 0 16 16">
           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
           <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
           </svg>`;
      }
    }
  }
}

/**
 * This function closes the adduser popup dialog box
 */
function closeUserDialog() {
  document.getElementById("bg-grey").classList.add("d-none");
}

/**
 * This function pushes araray to server via main.js and minibackend.js
 *
 * @param {string} key
 * @param {array} array
 */
function setArray(key, array) {
  backend.setItem(key, JSON.stringify(array));
}

/**
 * This function converts JSON-array to string then saves to local storage
 */
// function arraySaveToLocalStorage() {
//     // Json array to string then saved in local storage)
//      let allTasksAsString = JSON.stringify(tasks);
//      localStorage.setItem('tasks', allTasksAsString);
// }

/**
 *  This function reads JSON array as a string from localstorage on page load. Function call in html body "onload"
 *  string is then parsed into JSON array and our allTasks array is overwriten with this array on load.
 */
// function loadAllTasks() {

//     let allTasksAsString = localStorage.getItem('allTasks');
//     allTasks = JSON.parse(allTasksAsString);

//     console.log('loaded all Tasks', allTasks);
// }
