// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Load tasks from local storage on page load
window.onload = () => {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => addTaskToDOM(task));
};

// Add event listener to button
addTaskButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
        addTaskToDOM(task);
        saveTaskToLocalStorage(task);
        taskInput.value = "";
    }
});

// Function to add task to DOM
function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
}

// Function to save task to local storage
function saveTaskToLocalStorage(task) {
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to get tasks from local storage
function getTasksFromLocalStorage() {
    const tasksJSON = localStorage.getItem("tasks");
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}
