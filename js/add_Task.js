/*[
    {
        title : 'Test',
        date : 12355436542514,
        status : 'backlog', // backlog, todo, in progress, testing, done
        category : 'marketing', // marketing, design, production, sales
        urgency : 'low', // low (green), medium (yellow), high (red)
        description : 'Beschreibung des Tests.',
        user : [{
            name: 'Kai',
            img : 'url',
            mail : '',
        },{
            name: 'Brett',
            img : 'url',
            mail : '',
        },]
    }
]; */







/* [
    {
        name: 'Kai',
        img : 'url',
        mail : '',
        password : '',
    },{
        name: 'Brett',
        img : 'url',
        mail : '',
        password : '',
    },{
        name: 'Amar',
        img : 'url',
        mail : '',
        password : '',
    }
];  */
/*
let tasks = [
    {
       "title":"Test",
       "date":12355436542514,
       "status":"backlog",
       "category":"marketing",
       "urgency":"low",
       "description":"Beschreibung des Tests.",
       "user":[
          {
             "name":"Kai",
             "img":"url",
             "mail":""
          },
          {
             "name":"Brett",
             "img":"url",
             "mail":""
          }
       ]
    }
 ];  */

let users = [
    {
       "name":"Kai",
       "img":"url",
       "mail":"",
       "password":""
    },
    {
       "name":"Brett",
       "img":"url",
       "mail":"",
       "password":""
    },
    {
       "name":"Amar",
       "img":"url",
       "mail":"",
       "password":""
    }
 ]

// jsdoc: npm install -g jsdoc

/**
 * This function reads input data from addTasks form
 * 
 * @param {string} event - on event here summit button click the default funtcion of the form is prevented so that processes in console can be seen and the page is not automatically reloaded.
 */
 function addTask(event) {
     // function to prevent the default function of form being carried out
    event.preventDefault();
    
    // Variables for form objects to be saved in JSON
     let title = document.getElementById('title');
     let category = document.getElementById('category');
     let description = document.getElementById('description');
     let date = document.getElementById('due-date');
     let urgency = document.getElementById('urgency');
    //  let user = document.getElementById('assign');

     createJsonArrayForTask(title, category, description, date, urgency);       
     resetFormObjects(title, category, description, date, urgency);       
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
    let task = {
        'title': title.value,
        'category': category.value,
        'description' : description.value,
        'date': date.value,
        'urgency' : urgency.value,
        'status' : 'backlog'
           };
    // Push JSON to array "allTasks"
    tasks.push(task); 
    setArray('tasks', tasks);
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
    title.value = '';
    category.value = '';
    description.value = '';
    date.value = '';
    urgency.value = '';

}    

/**
 * This function converts JSON-array to string then saves to local storage
 */
function arraySaveToLocalStorage() {
    // Json array to string then saved in local storage)
     let allTasksAsString = JSON.stringify(tasks);
     localStorage.setItem('tasks', allTasksAsString);
}

/**
 *  This function reads JSON array as a string from localstorage on page load. Function call in html body "onload"
 *  string is then parsed into JSON array and our allTasks array is overwriten with this array on load.
 */    
function loadAllTasks() {
    
    let allTasksAsString = localStorage.getItem('allTasks');
    allTasks = JSON.parse(allTasksAsString);

    console.log('loaded all Tasks', allTasks);
}


function setArray(key, array) {
    backend.setItem(key, JSON.stringify(array));
  }