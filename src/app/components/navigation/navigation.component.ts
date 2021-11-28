import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  // initialize filter variable which controls which filter is "active"
  filter = 'all';

  constructor() {}

  ngOnInit(): void {}
}
