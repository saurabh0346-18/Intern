let tasks = [];
const renderTasks = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        li.innerHTML = `
            <span>${task.text}</span>
            <div class="actions">
                <button class="complete" onclick="toggleComplete(${index})">✔</button>
                <button class="delete" onclick="deleteTask(${index})">✖</button>
            </div>
        `;

        taskList.appendChild(li);
    });
};

// Add a new task
const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
        taskInput.value = '';
    }
};

// Toggle task completion
const toggleComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

// Delete a task
const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};
renderTasks();

