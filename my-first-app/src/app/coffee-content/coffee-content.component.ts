import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-content',
  templateUrl: './coffee-content.component.html',
  styleUrls: ['./coffee-content.component.css']
})
export class CoffeeContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'my-first-app';
  imageUrl=".././assets/cr1.jpg"
}
