// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Event Listener for the "Add" button
addBtn.addEventListener('click', addTask);

// Event Listener for pressing "Enter" key in input
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim(); // Get value and remove extra spaces

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 1. Create the main List Item (li)
    const li = document.createElement('li');

    // 2. Create a container for checkbox and text (to group them)
    const contentDiv = document.createElement('div');
    contentDiv.className = 'task-content';

    // 3. Create the Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    // 4. Create the Span for text
    const span = document.createElement('span');
    span.textContent = taskText;

    // 5. Create the Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // --- ASSEMBLE THE DOM ELEMENTS ---

    // Append checkbox and text to the content div
    contentDiv.appendChild(checkbox);
    contentDiv.appendChild(span);

    // Append content div and delete button to the li
    li.appendChild(contentDiv);
    li.appendChild(deleteBtn);

    // Append the new li to the main list
    taskList.appendChild(li);

    // --- ADD EVENT LISTENERS TO DYNAMIC ELEMENTS ---

    // Toggle "Done" state
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            contentDiv.classList.add('completed');
        } else {
            contentDiv.classList.remove('completed');
        }
    });

    // Delete item
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Clear input field after adding
    taskInput.value = "";
    taskInput.focus();
}