var listTodoApp = JSON.parse(localStorage.getItem('todoList'));
console.log(listTodoApp);


function renderTable(listTodo) {
    let tableTbody = document.querySelector("tbody");
    let data = "";
    if (listTodoApp == null) {
        return
    } else {
        for (let i = 0; i < listTodo.length; i++) {
            data += `
            <tr>
                <td> ${listTodo[i].id + 1} </td>

                <td class="todoItem">
                    ${listTodo[i].todoItem}
                </td>

                <td> ${listTodo[i].status} </td>

                <td class="btn-edit">
                    <button onclick="editTodo(${listTodo[i].id})">Edit</button>
                </td>

                <td class="btn-delete">
                    <button onclick="deleteTodo(${listTodo[i].id})">Delete</button>
                </td>

                <td class="btn-finished">
                    <button onclick="finishedTodo(${listTodo[i].id})">Finished</button>
                </td>
            </tr>
        `
        }
    }
    tableTbody.innerHTML = data;
}
renderTable(listTodoApp);

function addTodo() {
    let inpTodo = document.getElementById("inp-todo");
    let dataTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (dataTodoList == null) {
        dataTodoList = [];
    }
    let objectTodo = {
        id: dataTodoList.length,
        todoItem: inpTodo.value,
        status: "In progress"
    }
    if (dataTodoList == null) {
        let array = [];
        array.push(objectTodo);
        localStorage.setItem("todoList", JSON.stringify(array));
        inpTodo.value = ""
    } else {
        dataTodoList.push(objectTodo);
        localStorage.setItem("todoList", JSON.stringify(dataTodoList));
        inpTodo.value = ""
    }
    renderTable(dataTodoList);
}

function deleteTodo(paramID) {
    let dataTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (dataTodoList.length > 1) {
        dataTodoList.splice(paramID, 1);
        localStorage.setItem("todoList", JSON.stringify(dataTodoList));
    } else {
        dataTodoList = [];
        localStorage.setItem("todoList", JSON.stringify(dataTodoList));
    }

    renderTable(dataTodoList);
}

// let valueIndex = "";
function editTodo(paramID) {
    let dataTodoList = JSON.parse(localStorage.getItem('todoList'));

    let todoText = document.querySelectorAll(".todoItem");
    todoText[paramID].innerHTML = `
            <input type="text" class="inp-edit" value="${dataTodoList[paramID].todoItem}"
             onchange="saveTodo(${paramID})"/>
        `

    // let editTodo = document.querySelectorAll(".editTodo");
    // editTodo[paramID].innerHTML = `
    //         <button onclick="saveEdTodo(${paramID})">Save</button>
    //         `
    // let inpEdit = document.querySelectorAll(".inp-edit");
    // inpEdit[paramID].value = dataTodoList[paramID].todoItem
    // valueIndex = paramID;
}

function saveTodo(paramID) {
    console.log(paramID);
    let dataTodoList = JSON.parse(localStorage.getItem('todoList'));

    let inpEdit = document.getElementsByClassName("inp-edit");


    dataTodoList[paramID].todoItem = inpEdit[0].value;
    console.log(paramID);

    localStorage.setItem("todoList", JSON.stringify(dataTodoList));
    renderTable(dataTodoList);
    console.log(paramID);
}

function finishedTodo(paramId) {
    let dataTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (dataTodoList[paramId].status == "In progress") {
        dataTodoList[paramId].status = "finished";
        localStorage.setItem("todoList", JSON.stringify(dataTodoList));
    } else {
        dataTodoList[paramId].status = "In progress";
        localStorage.setItem("todoList", JSON.stringify(dataTodoList));
    }

    renderTable(dataTodoList);
}