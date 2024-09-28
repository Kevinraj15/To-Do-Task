// Select the elements from the DOM
let inputText = document.querySelector("#newtask input");
let addTaskButton = document.querySelector("#add");
let taskContainer = document.querySelector("#task");

// Add an event listener for the "Add" button
addTaskButton.addEventListener("click", function() {
    // Get the value from the input field
    let task = inputText.value;

    // Check if the input is not empty
    if (task !== "") {
        // Create a new div for the task
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        // Add the task text inside a span
        let taskText = document.createElement("span");
        taskText.innerText = task;

        // Add a delete button
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

        // Append the task text and delete button to the task div
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(deleteButton);

        // Append the task div to the task container
        taskContainer.appendChild(taskDiv);

        // Clear the input field after adding the task
        inputText.value = "";

        // Add functionality to the delete button
        deleteButton.addEventListener("click", function() {
            taskDiv.remove();
        });

        // Add functionality to mark a task as complete
        taskDiv.addEventListener("click", function() {
            taskText.classList.toggle("complete");
        });
    } else {
        alert("Please enter a task.");
    }
});
