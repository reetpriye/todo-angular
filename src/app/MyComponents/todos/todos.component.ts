import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  localItem: string;

  constructor() {
    this.localItem = localStorage.getItem('todos') || '';
    if (this.localItem != '') this.todos = JSON.parse(this.localItem);
    else this.todos = [];
  }

  deleteTodo(todo: Todo) {
    const idx = this.todos.indexOf(todo);
    this.todos.splice(idx, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    const idx = this.todos.indexOf(todo);
    this.todos[idx].active = !this.todos[idx].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
