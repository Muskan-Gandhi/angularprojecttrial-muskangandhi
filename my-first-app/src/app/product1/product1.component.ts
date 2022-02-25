import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

data=
  [
    {
      "id": 1,
      "pname": "wheat",
      "price": 200,
      "quantity": 150,
      "manufacturingLocation": "surat",
      "presentStock": 150
    },
    {
      "id": 2,
      "pname": "Rice",
      "price": 200,
      "quantity": 50,
      "manufacturingLocation": "surat",
      "presentStock": 100
    },
    {
      "id": 3,
      "pname": "bread",
      "price": 40,
      "quantity": 50,
      "manufacturingLocation": "surat",
      "presentStock": 100
    },
  ]
}
