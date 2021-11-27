import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-list/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TodoAddComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
