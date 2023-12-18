/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.all_todos = []
  }

  add_todo(todo) {
    this.all_todos.push(todo)
  }
  delete_todo(indexTodo) {
    this.all_todos.splice(indexTodo, 1)
  }
  update_todo(indexTodo, todo) {
    this.all_todos[indexTodo] = todo
  }
  getAll() {
    return this.all_todos
  }
  get(indexTodo) {
    return this.all_todos[indexTodo]
  }
  clear() {
    this.all_todos = []
  }
}

const add_todo = () => {
  todoList.add('Task 1');
  todoList.add('Task 2');
  todoList.add('Task 3');
}



module.exports = Todo;
