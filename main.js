function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput == '') {
        alert("Please enter a task");
        return;
    }
    let li = document.getElementById("li");

    li.textContent = taskInput.value;

    taskList.value = '';

    li.onclick = function () {
        this.parentNode.removeChild(this);
    }
}

function handleEnterKey(event) {
    if (event === "Enter") {
        event.preventDefault();
        addTask();
    }
}
