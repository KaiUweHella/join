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

function memberNUmberHTML(length){
    return /*html*/ `
    <span class="number-of-member">+${length}</span>
    `;
}

function memberHTML(img){
    return /*html*/ `
        <img class="avatar" src="${img}" alt="">
    `;
}   

function memberOverviewHTML(img){
    return /*html*/ `
        <img class="avatar-ov" src="${img}" alt="">
    `;
}