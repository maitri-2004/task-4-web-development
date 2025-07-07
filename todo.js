let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

window.onload = loadTasks;

function addTask() {
  let task = taskInput.value.trim();
  if (task === "") return;

  let tasks = getTasks();
  tasks.push({ text: task, completed: false });
  saveTasks(tasks);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  let tasks = getTasks();
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    li.innerHTML = `
      <span onclick="toggleComplete(${index})">${task.text}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">X</button>
    `;
    taskList.appendChild(li);
  });
}

function toggleComplete(index) {
  let tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  renderTasks();
}

function deleteTask(index) {
  let tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks();
}

function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  renderTasks();
}