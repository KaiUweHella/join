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
     let title = document.getElementById('title').value
     let category = document.getElementById('category').value
     let date = document.getElementById('due-date').value

     let task = {
         'title': title,
         'category': category,
         'date': date
            };

     Alltasks.push(task);

     let allTasksAsString = JSON.stringify(Alltasks);
     localStorage.setItem('allTasks', allTasksAsString)
     
     
     console.log('tit', title)
     console.log('cat', category)
     console.log('json', task)
     console.log('date', date)
     console.log('array', Alltasks)
 
        }
function loadAllTasks() {
    console.log('tit', title)
}