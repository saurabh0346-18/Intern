// Load tasks from localStorage
const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
  };
  
  // Save tasks to localStorage
  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  // Render tasks to the DOM
  const renderTasks = () => {
    const tasks = loadTasks();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
  
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        li.appendChild(taskText);
  
        const actions = document.createElement('div');
        actions.className = 'actions';
  
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete';
        completeBtn.textContent = '✔';
        completeBtn.onclick = () => toggleComplete(index);
        actions.appendChild(completeBtn);
  
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.textContent = '✖';
        deleteBtn.onclick = () => deleteTask(index);
        actions.appendChild(deleteBtn);
  
        li.appendChild(actions);
        taskList.appendChild(li);
    });
  };
  
  // Add a new task
  const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText) {
        const tasks = loadTasks();
        tasks.push({ text: taskText, completed: false });
        saveTasks(tasks);
        renderTasks();
        taskInput.value = '';
    }
  };
  
  // Toggle task completion
  const toggleComplete = (index) => {
    const tasks = loadTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    renderTasks();
  };
  
  // Delete a task
  const deleteTask = (index) => {
    const tasks = loadTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
  };
  
  // Initial render
  renderTasks();