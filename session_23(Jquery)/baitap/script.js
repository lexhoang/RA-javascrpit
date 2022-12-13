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
                <td> ${i + 1} </td>
                <td> ${listTodo[i]} </td>
                <td>In progress</td>
                <td>
                    <button class="btn-edit" onclick="editTodo(${i})">Edit</button>
                    <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
                    <button class="btn-finished">Finished</button>
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
        let array = [];
        array.push(inpTodo.value);
        localStorage.setItem("todoList", JSON.stringify(array));
        inpTodo.value = ""
    } else {
        dataTodoList.push(inpTodo.value);
        localStorage.setItem("todoList", JSON.stringify(dataTodoList));
        inpTodo.value = ""
    }
    renderTable(dataTodoList);
}

function deleteTodo(paramID) {
    let dataTodoList = JSON.parse(localStorage.getItem('todoList'));
    for (let i = 0; i < dataTodoList.length; i++) {
        if (i == paramID) {
            dataTodoList.splice(i, 1);
        }
    }
    localStorage.setItem("todoList", JSON.stringify(dataTodoList));
    renderTable(dataTodoList);
}
let valueIndex = "";

function editTodo(paramID) {
    let inpEdit = document.getElementById("inp-edit");
    let dataTodoList = JSON.parse(localStorage.getItem('todoList'));
    for (let i = 0; i < dataTodoList.length; i++) {
        if (i == paramID) {
            inpEdit.value = dataTodoList[paramID];
            valueIndex = paramID
        }
    }
}

function saveTodo() {
    let inpEdit = document.getElementById("inp-edit");
    let dataTodoList = JSON.parse(localStorage.getItem('todoList'));
    dataTodoList[valueIndex] = inpEdit.value;
    localStorage.setItem("todoList", JSON.stringify(dataTodoList));
    renderTable(dataTodoList);
    inpEdit.value = ""
}