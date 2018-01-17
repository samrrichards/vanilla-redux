let todos = [];
let id = 1;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('todoform').addEventListener('submit', e => {
    e.preventDefault();
    addTodo({
      title: e.target.title.value,
      description: e.target.description.value
    });
    render();
  });
});

function render() {
  const list = document.getElementById('todos');
  list.innerHTML = '';
  todos.forEach(todo => {
    const newLi = document.createElement('li');
    const removeTodoBtn = document.createElement('button');
    removeTodoBtn.innerText = 'REMOVE';
    removeTodoBtn.addEventListener('click', e => {
      removeTodo(todo.id);
    });
    const todoSpan = document.createElement('span');
    todoSpan.innerText = `${todo.title} - ${todo.description}`;

    newLi.appendChild(todoSpan);
    newLi.appendChild(removeTodoBtn);
    list.appendChild(newLi);
  });
}

render();

function addTodo(todo) {
  todos.push({ title: todo.title, description: todo.description, id });
  id++;
}

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  render();
}
