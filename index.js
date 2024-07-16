// index.js

// Get the input box and list container elements
const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

// Function to add a new task
function addtask() {
    // Check if input box is empty
    if (inputbox.value === '') {
        alert("You must write something");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.textContent = inputbox.value; // Set the text content of the list item

        // Append the new list item to the list container
        listcontainer.appendChild(li);

        // Clear the input box after adding task
        inputbox.value = '';
    }
}
