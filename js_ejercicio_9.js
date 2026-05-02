// 1. Cargar tareas al iniciar
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveAndRender() {
  // 2. Guardar en localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
                    <input type="checkbox" ${task.completed ? "checked" : ""} 
                        onclick="toggleTask(${index})">
                    <span>${task.text}</span>
                `;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value === "") return;

  tasks.push({ text: input.value, completed: false });
  input.value = "";
  saveAndRender();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveAndRender();
}

function clearCompleted() {
  tasks = tasks.filter((task) => !task.completed);
  saveAndRender();
}

// Renderizar inicial
renderTasks();
