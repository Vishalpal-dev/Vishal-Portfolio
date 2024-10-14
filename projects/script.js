// script.js

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskText => addTaskToDOM(taskText));
}

// Function to add task to the DOM
function addTaskToDOM(taskText) {
    const taskList = document.getElementById("taskList");
    const taskDiv = document.createElement("div");
    taskDiv.className = "task-item";
    taskDiv.textContent = taskText;

    // Create a delete button for each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskDiv);
        removeTaskFromStorage(taskText);
    });

    taskDiv.appendChild(deleteButton);
    taskList.appendChild(taskDiv);
}

// Function to remove task from localStorage
function removeTaskFromStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// Event listener for adding a task
document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText) {
        addTaskToDOM(taskText);
        saveTaskToStorage(taskText);
        taskInput.value = ""; // Clear the input
    }
});

// Event listener for pressing Enter key
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("addTaskButton").click(); // Trigger add task on Enter
    }
});

// Function to save task to localStorage
function saveTaskToStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks when the page is loaded
window.onload = loadTasks;
