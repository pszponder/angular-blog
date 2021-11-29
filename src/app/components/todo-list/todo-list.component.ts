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

  handleActionClicked(event: { action: string; todoId: number }) {
    console.log(event);
    switch (event.action) {
      case 'important':
        this.todosService.toggleTodoImportant(event.todoId);
        break;
      case 'edit':
        console.log('edit');
        break;
      case 'complete':
        this.todosService.toggleTodoComplete(event.todoId);
        break;
      case 'delete':
        console.log('delete');
        console.log(event.todoId);
        this.todosService.removeTodo(event.todoId);
        break;
      default:
        break;
    }
  }
}
