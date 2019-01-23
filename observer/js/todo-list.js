document.addEventListener('DOMContentLoaded', () => {
  const observable = new Observable();

  new TodoList('todoList', observable);

  new TodoItem(observable, {
    text: 'This is a default completed todo',
    isChecked: true
  });

  const saveTodoButton = document.querySelector('#saveTodo');
  saveTodoButton.addEventListener('click', event => {
    const input = document.querySelector('input[name="todo"]');
    new TodoItem(observable, {
      text: input.value
    });

    input.value = "";
  });
});
