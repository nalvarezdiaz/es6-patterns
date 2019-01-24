# Observer pattern

In this example, an observer pattern has been introduced in order to uncouple the dependencies from the elements.

## Publisher
It publishes event __todo-item-created__ when it is created and, in this publication, it sends itself to every subscriber:

```javascript
class TodoItem {

  static get CREATED() {
    return 'todo-item-created';
  }

  constructor(observable, props) {
    this.observable = observable;
    [...]
    this.observable.publish(TodoItem.CREATED, this);
  }
  
  render() {
    [...]
  }
}
```

## Subscriber
It fires and event when detects a new publication

```javascript
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
    [...]
  }

}
```

## Using
In the [demo](https://nalvarezdiaz.github.io/es6-patterns/observer/index.html) when __save__ button is pressed, 
a new TodoItem is created as follows:

```javascript
new TodoItem(observable, {
  text: input.value
});
```

Only with this new code, the Item is created and automatically added according to the definition of __addTodo__ method
