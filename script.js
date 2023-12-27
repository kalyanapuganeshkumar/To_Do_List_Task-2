const list = document.getElementById("list");
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", addItem);
list.addEventListener("click", checkItem);

function addItem() {
    const task = taskInput.ariaValueMax.trim():
    if (task) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = task;
        li.appendChild(a);
        list.appendChild(li);
        taskInput.value = "";
    }
}

function checkItem(e) {
    if (e.target.tagName == "A") {
        e.target.classList.toggle("checked");
    }
}