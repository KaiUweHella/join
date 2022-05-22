function cardHTML(tasks, i){
    return /*html*/ `
    <div draggable="true" ondragstart="startDragging(${i})" class="task-each-category">
        <div class="status">
            <div class="color-field" style="background-color:var(--color-${tasks.urgency})"></div>
            <div>${tasks.category.toUpperCase()}</div>
        </div>
        <h4 class="task-h4">${tasks.title}</h4>
         <p class="task-description">${tasks.description}</p>
         <div class="time-and-members">
             <div class="time-date">
                 <img src="./img/clock.svg" alt="">
                <p class="date">${tasks.date}</p>
            </div>
            <div class="task-member">
                <img class="avatar" src="./img/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg" alt="">
                <img class="avatar" src="./img/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg" alt="">
            </div>
        </div>
    </div>
    `;
}