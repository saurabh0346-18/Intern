// Utility functions for localStorage operations
const loadTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];
const saveTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));
const renderTasks = () => {
  const tasks = loadTasks();
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = createTaskElement(task, index);
    taskList.appendChild(li);
  });
};

// Create a task element
const createTaskElement = (task, index) => {
  const li = document.createElement('li');
  li.className = task.completed ? 'completed' : '';
  li.dataset.index = index;

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
  return li;
};

// Add a new task
const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText) {
    const tasks = loadTasks();
    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);
    saveTasks(tasks);

    const taskList = document.getElementById('taskList');
    const li = createTaskElement(newTask, tasks.length - 1);
    taskList.appendChild(li);

    taskInput.value = '';
  }
};

// Toggle task completion status
const toggleComplete = (index) => {
  const tasks = loadTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);

  const taskList = document.getElementById('taskList');
  const li = taskList.querySelector(`li[data-index='${index}']`);
  li.className = tasks[index].completed ? 'completed' : '';
};

// Delete a task
const deleteTask = (index) => {
  const tasks = loadTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);

  const taskList = document.getElementById('taskList');
  const li = taskList.querySelector(`li[data-index='${index}']`);
  taskList.removeChild(li);


  Array.from(taskList.children).forEach((child, i) => {
    child.dataset.index = i;
  });
};

renderTasks();
