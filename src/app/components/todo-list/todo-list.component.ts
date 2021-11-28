import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filter = { category: 'all' };

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.todoList;
    this.filter = this.todosService.filter;
  }

  // Create a function to return a filtered array of todos
  filterTodos(filterStr: string): Todo[] {
    if (filterStr === 'important') {
      return this.todos.filter((todo) => todo.important);
    } else if (filterStr === 'pending') {
      return this.todos.filter((todo) => !todo.complete);
    } else if (filterStr === 'complete') {
      return this.todos.filter((todo) => todo.complete);
    } else {
      return this.todos;
    }
  }
}
