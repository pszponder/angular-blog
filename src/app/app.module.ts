import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-list/todo-item/todo-item.component';
import { FilterButtonComponent } from './components/navigation/filter-button/filter-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TodoAddComponent,
    TodoListComponent,
    TodoItemComponent,
    FilterButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
