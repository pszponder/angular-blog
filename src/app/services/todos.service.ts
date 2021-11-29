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
    this._todoList[todoId].important = !this._todoList[todoId].important;
  }

  // Toggle the complete property of a Todo of specified index
  toggleTodoComplete(todoId: number): void {
    this._todoList[todoId].complete = !this._todoList[todoId].complete;
  }

  // Remove a Todo at a specified index
  removeTodo(todoId: number): void {
    this._todoList.splice(todoId, 1);
  }

  // Clear the TODO data set
  clearTodos(): void {
    this._todoList = [];
  }
}
