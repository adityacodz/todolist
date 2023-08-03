const inputbox = document.querySelector(".inputbox input");
const add = document.querySelector("#addbutton");
const todolist = document.querySelector(".itemlist");
const pendingTasks = document.querySelector(".pendingTasks");
const clearall = document.querySelector(".clearall");


inputbox.onkeyup = () => {
    let UserEnterValue = inputbox.value;
    if (UserEnterValue.trim() != 0) {
        add.style.display = "block";
    }
    else {
        add.style.display = "none";
    }
}

var item = [];
add.onclick = () => {
    item.push(inputbox.value)
    showcase(); 
}

function showcase() {
    let ListTag = "";
    item.forEach((element, index) => {
        ListTag += `<li>
                         <label class="box">
                            <input class="checkinput" type="checkbox">
                                <span class="checkmark"></span>${element}
                        </label>
                        <span class="icon">
                            <i class=" del uil uil-plus-circle" onclick="deleteTask(${index})"></i>
                        <span>
                    </li>`;
                });
    todolist.innerHTML = ListTag; 
    inputbox.value = ""; 
    add.style.display = "none";
    pendingTasks.textContent = item.length;
}


function deleteTask(index) {
    item.splice(index, 1);
    showcase();
}

clearall.onclick = () => {
    item = [];
    showcase();
}

document.querySelector('.clearcomtask').onclick = () => {
    var inputElems = document.querySelectorAll(".checkinput"); 
    var temp = [] 
    for (var i = 0; i < item.length; i++) {
        if (inputElems[i].checked === true) {
            temp.push(item[i]);
        }
    }
    var j = 0;
    for (i = 0; i < item.length; i++) {
        if (item[i] === temp[j]) {
            item.splice(i, 1);
            j++;
            i--;
        }
    }
    showcase();
}


document.querySelector('.complete').onclick = () => {
    checked(true);
}

document.querySelector('.uncomplete').onclick = () => {
    checked(false);
}

function checked(params) {
    var inputElems = document.querySelectorAll(".checkinput"); 
    for (var i = 0; i < item.length; i++) {
        if (params == true) {
            inputElems[i].checked = true;
        }
        else {
            inputElems[i].checked = false;
        }
    }
}