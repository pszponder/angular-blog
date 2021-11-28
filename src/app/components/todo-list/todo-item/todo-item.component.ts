import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() actionClicked = new EventEmitter<{
    action: string;
    todoId: number;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onActionClicked(action: string, todoId: number) {
    this.actionClicked.emit({
      action: action,
      todoId: todoId,
    });
  }
}
