const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);

  const btnContainer = document.createElement('div');
  btnContainer.className = 'task-buttons';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);
  li.appendChild(btnContainer);

  taskList.appendChild(li);
  taskInput.value = '';
});
