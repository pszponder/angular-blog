import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/shared/todo';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  onAddTodo(description: string) {
    this.todosService.addTodo(description);
  }
}
