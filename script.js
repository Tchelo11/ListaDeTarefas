const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Adicionar tarefa
addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Por favor, digite uma tarefa!');
    return;
  }

  // Criar o elemento da tarefa
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Remover</button>
  `;

  // Marcar tarefa como concluída
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Remover tarefa
  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evitar que clique na tarefa marque como concluída
    li.remove();
  });

  // Adicionar a tarefa à lista
  taskList.appendChild(li);

  // Limpar o campo de entrada
  taskInput.value = '';
}
