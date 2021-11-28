import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/shared/todo';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  // Declare todoList method which will be a reference to the data from the todos service
  _todoList: Todo[] = [];

  // Declare addTodo method
  addTodo(description: string): void {}

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this._todoList = this.todosService.todoList;

    // Set the component's addTodo method to be a copy of todosService method
    this.addTodo = this.todosService.addTodo;
  }
}
