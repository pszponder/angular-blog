import { Injectable } from '@angular/core';
import { Todo } from '../shared/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  // Specify a filter which will be used to sort the todos
  // Must be in an object so that a reference to it is passed in by the service
  _filter = { category: 'all' };

  get filter() {
    return this._filter;
  }

  counter = 5;

  // Initial list of todos
  _todoList: Todo[] = [
    {
      id: 0,
      description: '1st Todo: COMPLETE',
      important: false,
      complete: true,
    },
    {
      id: 1,
      description: '2nd Todo',
      important: false,
      complete: false,
    },
    {
      id: 2,
      description: '3rd Todo: IMPORTANT',
      important: true,
      complete: false,
    },
    {
      id: 3,
      description: '4th Todo: IMPORTANT & COMPLETE',
      important: true,
      complete: true,
    },
    {
      id: 4,
      description: '5th Todo: IMPORTANT',
      important: true,
      complete: false,
    },
  ];

  // Getter for _todoList
  get todoList() {
    return this._todoList;
  }

  // Add a TODO item to the list
  addTodo(description: string): void {
    const newTodo = {
      id: this.counter++,
      description: description,
      important: false,
      complete: false,
    };
    this._todoList.push(newTodo);
  }

  // Edit a TODO item description at a specific index
  editTodo(newDescription: string, todoId: number): void {
    this._todoList[todoId].description = newDescription;
  }

  // Toggle the important property of a Todo of specified index
  toggleTodoImportant(todoId: number): void {
    for (const todo of this._todoList) {
      if (todo.id === todoId) {
        todo.important = !todo.important;
        break;
      }
    }
  }

  // Toggle the complete property of a Todo of specified index
  toggleTodoComplete(todoId: number): void {
    for (const todo of this._todoList) {
      if (todo.id === todoId) {
        todo.complete = !todo.complete;
        break;
      }
    }
  }

  // Remove a Todo at a specified index
  removeTodo(todoId: number): void {
    for (let i = 0; i < this._todoList.length; i++) {
      if (this._todoList[i].id === todoId) {
        this._todoList.splice(i, 1);
        break;
      }
    }
  }

  // Clear the TODO data set
  clearTodos(): void {
    this._todoList = [];
  }
}
