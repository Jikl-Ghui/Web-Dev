
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

// Event Listener for pressing "Enter" key in input
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim(); 

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');

    const contentDiv = document.createElement('div');
    contentDiv.className = 'task-content';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    contentDiv.appendChild(checkbox);
    contentDiv.appendChild(span);

    li.appendChild(contentDiv);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            contentDiv.classList.add('completed');
        } else {
            contentDiv.classList.remove('completed');
        }
    });

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskInput.value = "";
    taskInput.focus();
}