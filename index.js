function addFunction(id) {
    var add = document.createElement("textarea");
    var addone = document.createTextNode("");
    add.appendChild(addone);
    document.getElementById(`saveInfor${id}`).appendChild(add);
    add.setAttribute('placeholder', 'Thêm thẻ ...');
    add.setAttribute("id", `value${id}`);
    document.getElementById(`addtag${id}`).style.display = "none"
    document.getElementById(`save${id}`).style.display = "block"
}

function saveFunction(id) {
    var valueInput = document.getElementById(`value${id}`).value;
    var divValue = document.createElement("li");
    var iconEdit = document.createElement("i");
    iconEdit.className = 'fa fa-pencil-square-o';
    var taskId = document.getElementById(`listCard${id}`).lastElementChild
    var idAdd = taskId ? parseInt(taskId.id) + 1 : 1;
    divValue.setAttribute('data-toggle', 'modal');
    divValue.setAttribute('data-target', '.bd-example-modal-lg');
    divValue.setAttribute(`onclick`, `showModal(${idAdd})`);
    divValue.setAttribute(`id`, `${idAdd}`);
    iconEdit.setAttribute(`onclick`, `iconEdit(event, ${idAdd})`);
    divValue.innerHTML = valueInput;
    document.getElementById(`listCard${id}`).appendChild(divValue);
    divValue.appendChild(iconEdit);
    document.getElementById(`value${id}`).remove();
    document.getElementById(`save${id}`).style.display = "none";
    document.getElementById(`addtag${id}`).style.display = "block";
}

function showModal(id) {
    var card = document.getElementById(`${id}`); //li-taskCard  listId-hiện tên  
    card.setAttribute('data-toggle', 'modal');
    card.setAttribute('data-target', `#exampleModal`);
    document.getElementById(`listId`).innerHTML = card.innerText
}

function iconEdit(event) {
    event.stopPropagation();
    alert('edit cái này à')
}




















// function deleteFunction(id) {
//     var list = document.querySelectorAll(`#saveInfor1 li`);
//     for (var i = 0; li = list[i]; i++) {
//         li.parentNode.removeChild(li);
//     }

// }