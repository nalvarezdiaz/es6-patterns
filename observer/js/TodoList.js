class TodoList {

  constructor(id, observable) {
    this.root = document.getElementById(id);
    this.observable = observable;
    this.todos = [];

    this.root.appendChild(this.render());

    this.observable.subscribe(TodoItem.CREATED, this.addTodo.bind(this));
  }

  addTodo(todoItem) {
    this.todos.push(todoItem);
    this.tbody.appendChild(todoItem.render());
  }

  render() {
    const table = document.createElement('table');
    table.classList.add('todo-list');

    const thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    const thDate = document.createElement('th');
    thDate.classList.add('date');
    thDate.textContent = 'Date';

    const thStatus = document.createElement('th');
    thStatus.classList.add('status');

    const thItem = document.createElement('th');
    thItem.classList.add('item');
    thItem.textContent = 'Item';

    thead.appendChild(thDate);
    thead.appendChild(thStatus);
    thead.appendChild(thItem);

    table.appendChild(thead);
    table.appendChild(this.tbody);

    return table;
  }

}
