import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  filter = { category: 'all' };

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.filter = this.todosService.filter;
  }
}
