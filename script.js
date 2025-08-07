function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

document.addEventListener('mousemove', function(e) {
  const xOffset = (e.clientX / window.innerWidth - 0.5) * 20;
  const yOffset = (e.clientY / window.innerHeight - 0.5) * 20;

  document.body.style.backgroundPosition = `calc(50% + ${xOffset}px) calc(50% + ${yOffset}px)`;
});

