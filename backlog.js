// let tasks = [
//     {
//         title : 'Test',
//         date : 12355436542514,
//         status : 'backlog', // backlog, todo, in progress, testing, done
//         category : 'marketing', // marketing, design, production, sales
//         urgency : 'low', // low (green), medium (yellow), high (red)
//         description : 'Beschreibung des Tests.',
//         user : [{
//             name: 'Kai',
//             img : 'url',
//             mail : '',
//         },{
//             name: 'Brett',
//             img : 'url',
//             mail : '',
//         },]
//     }
// ];

// let users = [
//     {
//         name: 'Kai',
//         img : 'url',
//         mail : '',
//         password : '',
//     },{
//         name: 'Brett',
//         img : 'url',
//         mail : '',
//         password : '',
//     },{
//         name: 'Amar',
//         img : 'url',
//         mail : '',
//         password : '',
//     }
// ];

// MEINE JAVASCRIPT

let tableBacklog = [];

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button>',
        '</div>'
    ].join('')

    console.log('Klick');
    alertPlaceholder.append(wrapper);
}

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Ihre Task wird zu Board hinzugefügt!', 'success');
    })
}


function test() {
    let table = document.getElementById('testtabelle');
    table.innerHTML = '';

    for (let i = 0; i < tableBacklog.length; i++) {
        const tabletr = tableBacklog[i];
        table.innerHTML += `<tbody>

        <tr id="liveAlertBtn">
        <th id="urgency" scope="row"><span class="material-symbols-outlined double_arrow_up">
                keyboard_double_arrow_up
            </span></th>
        <td id="user"><svg class="task-profile" xmlns="http://www.w3.org/2000/svg" width="32"
                height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            <span class="">Jacob<br></a></span>
        </td>
        <td><a href="mailto:gabigibsnicht@mail.com">gabigibsnicht@mail.com</td>
        <td id="category">Marketing</td>
        <td id="status">Backlog</td>
        <td></td>
        <div id="liveAlertPlaceholder"></div>
        
    </tr>
    </tbody>
        `;
    }

    console.log('pushTabelle');

    let tabletr = document.getElementById('testtabelle');
    tableBacklog.push(tabletr.value);

    let tableBacklogAsText = JSON.stringify(tableBacklog);
    localStorage.setItem('tableBacklog', tableBacklogAsText);
}

function addTaskBacklog() {



    // save();
    // test();
}

function save() {


}




// ("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
//     ("#success-alert").slideUp(500);
// });
// (document).ready(function() {
// ("#success-alert").hide();
//     ("#myWish").click(function showAlert() {
//       ("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
//         ("#success-alert").slideUp(500);
//       });
//     });
//   });

// var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
// var alertTrigger = document.getElementById('liveAlertBtn');

// function alert(message, type) {
//   var wrapper = document.createElement('div');
//   wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

//   alertPlaceholder.append(wrapper);
// }

// if (alertTrigger) {
//   alertTrigger.addEventListener('click', function () {
//     alert('Nice, you triggered this alert message!', 'success');

//   })
// }
// tb = document.createElement("tbody")  
// var tbody  = document.createElement('tbody'); 
// table.appendChild(tbody);
// var table_row  = document.createElement('tr'); 
// tbody.appendChild(table_row)// 