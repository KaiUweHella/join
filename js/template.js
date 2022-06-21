function cardHTML(tasks, i) {
    return /*html*/ `
    <div draggable="true" ondragstart="startDragging(${i})" class="task-each-category">
        <div class="status">
            <div class="color-field" style="background-color:var(--color-${
              tasks.urgency
            })"></div>
            <div>${tasks.category.toUpperCase()}</div>
        </div>
        <h4 class="task-h4">${tasks.title}</h4>
         <p class="task-description">${tasks.description}</p>
         <div class="time-and-members">
             <div class="time-date">
                 <img src="./img/clock.svg" alt="">
                <p class="date">${tasks.date}</p>
            </div>
            <div class="task-member" onmouseover="showMembers(${i})" onmouseout="hideMembers(${i})">
                <div id="task-member${i}">
                    
                </div>
                <div id="number-of-member${i}">
                    
                </div>
                <div class="member-overview d-none" id="member-overview${i}">
                    
                </div>
            </div>
        </div>
    </div>
    `;
}

function memberNUmberHTML(length) {
    return /*html*/ `
    <span class="number-of-member">+${length}</span>
    `;
}

function memberHTML(img) {
    return /*html*/ `
        <img class="avatar" src="${img}" alt="">
    `;
}

function memberOverviewHTML(img) {
    return /*html*/ `
        <img class="avatar-ov" src="${img}" alt="">
    `;
}

function backlogTableHTML(i, colorOfUrgency) {
    return /*html*/ `
            <table>
            <tbody>
                <tr id="liveAlertBtn"  class="taskButton responsive-display" onclick="addToBoard(${i})">
                    <td class="priority-con urgency-img-center" id="urgency-img"  style="background: url(${colorOfUrgency}) no-repeat center">
                    <!-- ${tasks[i].urgency} -->
                    </td>
                    <!-- <td class="users-con" id="user-names${i}"> -->
                        <!-- load images -->
                    <!-- </td> -->
                    <td  class="category-con" id="category">${tasks[i].category}</td>
                    <td class="status-con" id="status">${tasks[i].status}</td>
                    <td class="details-con">${tasks[i].description}</td>
                    <div id="liveAlertPlaceholder"></div>
                </tr>
            </tbody>
            </table>
            <div class="mobile-display">
                <div class="mobile-version-con" onclick="addToBoard(${i})">
                    <div class="mobile-urgency" style="background: url(${colorOfUrgency}) no-repeat center"></div>
                    <span class="info-con-mobile">
                        <span class="title-mobile">${tasks[i].title}</span>
                        <div class="category-mobile">${tasks[i].category}</div>
                    </span>
                    <div class="details-con-mobile">
                    <span>Details</span>
                    <span class="max-width-ch">${tasks[i].description}</span>
                    </div>

                </div>
            </div>
            `;
}