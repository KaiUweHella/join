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
 ];

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
 ]  */

Alltasks = [];

 function addTask(event) {
    event.preventDefault();
     let title = document.getElementById('title');
     let category = document.getElementById('category');
     let description = document.getElementById('description');
     let date = document.getElementById('due-date');
     let urgency = document.getElementById('urgency');
    //  let assign = document.getElementById('urgency');

     

     let task = {
         'title': title.value,
         'category': category.value,
         'description' : description.value,
         'date': date.value,
         'urgency' : urgency.value
            };

     Alltasks.push(task);

     title.value = '';
     category.value = '';
     description.value = '';
     date.value = '';
     urgency.value = '';

     let allTasksAsString = JSON.stringify(Alltasks);
     localStorage.setItem('allTasks', allTasksAsString);
     
     
     console.log('tit', title)
     console.log('cat', category)
     console.log('json', task)
     console.log('date', date)
     console.log('array', Alltasks)
 
        }
function loadAllTasks() {
    
    let allTasksAsString = localStorage.getItem('allTasks');
    AllTasks = JSON.parse(allTasksAsString);


    console.log('loaded all Tasks', AllTasks)
}