import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffeehead',
  templateUrl: './coffeehead.component.html',
  styleUrls: ['./coffeehead.component.css']
})
export class CoffeeheadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'my-first-app';
  imageUrl=".././assets/icon.jpg"
}
