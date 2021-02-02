class Todo {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    /**
     * Renders a view containing a piece of the UI;
     * returns the UI element.
     *
     */
    render() {
        //build the UI
        const tr = document.createElement('TR');
        tr.style.border = "1px solid #cfc9c9";
        tr.id = this.id;
        const tdTitle = document.createElement('TD');
        const txtInput = document.createElement("INPUT");
        txtInput.setAttribute("type", "text");
        txtInput.setAttribute("maxlength", 60);
        txtInput.classList.add('text-field');
        txtInput.value = this.title;
        tdTitle.appendChild(txtInput);
        tr.appendChild(tdTitle);
        const tdDescription = document.createElement('TD');
        const txtDes = document.createElement("INPUT");
        txtDes.setAttribute("type", "text");
        txtDes.setAttribute("maxlength", 60);
        txtDes.classList.add('text-field');
        txtDes.value = this.description;
        tdDescription.appendChild(txtDes);
        tr.appendChild(tdDescription);
        const closeBtn = document.createElement('a');
        closeBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'delete', 'end');
        //remove the UI element
        const toRemove = 'this.parentNode.parentNode.removeChild(this.parentNode)';
        closeBtn.setAttribute('onclick', toRemove);
        closeBtn.innerHTML = 'X';
        tr.appendChild(closeBtn);
        //the text field is editable
        tr.setAttribute('contenteditable', true);
        return tr;
    }
}

class Validator {
    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.form-parent');
        const form = document.querySelector('#todo-form');
        container.insertBefore(div, form);
        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }
}

function createUI(e) {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const message = document.querySelector('#description').value;
    const container = document.querySelector('#todo-list');
    // check if the fields are empty
    if (title === '' || message === '') {
        // a failing message sends arguments to the showAlert method of the VALIDATOR class
        const validator = new Validator();
        // Validator class instantiation.
        validator.showAlert('please fill in all fields', 'danger');
    } else {
        //create the object and add it to the DOM
        const todo = new Todo(Date.now().toString(), title, message);
        container.appendChild(todo.render());
    }
}

function save() {
    //empty localStorage
    localStorage.clear();
    const obj = {};
    const tbody = document.querySelector('#todo-list');
    const tableRows = tbody.getElementsByTagName('tr');
    const rowCount = tableRows.length;
    for (let x = 0; x < rowCount; x++) {
        //store id
        obj.id = tableRows[x].id;
        const td = tableRows[x].getElementsByTagName('td');
        //store the text of the 2 tds in the todo
        obj.title = td[0].childNodes[0].value;
        obj.description = td[1].childNodes[0].value;
        //serialization
        const todo = JSON.stringify(obj);
        localStorage.setItem(obj.id, todo);
    }
}

function loadStorage() {

    //localStore's pairs are not sorted
    function SortLocalStorage() {
        if (localStorage.length > 0) {
            var localStorageArray = new Array();
            for (let i = 0; i < localStorage.length; i++) {
                localStorageArray[i] = localStorage.key(i) + localStorage.getItem(localStorage.key(i));
            }
        }
        //create an array of strings from localStorage
        //and sort it
        var sortedArray = localStorageArray.sort();
        return sortedArray;
    }

    const sorted = SortLocalStorage();

    for (let i = 0; i < localStorage.length; i++) {

        //get the index from the sorted array element
        const sep = sorted[i].indexOf("{");
        const index = sorted[i].substring(0, sep);
        //get the item using the index
        var value = localStorage.getItem(index);
        //deserialization 
        const des = JSON.parse(value);
        const id = des.id;
        const title = des.title;
        const message = des.description;
        const container = document.querySelector('#todo-list');
        const todo = new Todo(id, title, message);
        container.appendChild(todo.render());

    }
}

function deleteAll() {
    const tbody = document.querySelector('#todo-list');
    var tableRows = tbody.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    //erase elements
    for (var x = rowCount - 1; x >= 0; x--) {
        tbody.removeChild(tableRows[x]);
    }
    //empty localStorage
    localStorage.clear();
}

document.addEventListener('DOMContentLoaded', loadStorage);
let btnAdd = document.querySelector('button[type="submit"]');
btnAdd.addEventListener('click', createUI);
let btnDelete = document.querySelector('#deleteAll');
btnDelete.addEventListener('click', deleteAll);
let btnSave = document.querySelector('#save');
btnSave.addEventListener('click', save);