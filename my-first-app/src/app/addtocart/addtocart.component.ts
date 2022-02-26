import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data  =[
    {
      "id": 1,
      "pname": "Vanilla latte",
      "price": 200,
      "quantity": 1,
      "manufacturingLocation": "surat",
      "presentStock": 150,
      "imageurl" : ".././assets/vcoffee.jpg"
    },
    {
      "id": 2,
      "pname": "Cold Coffee",
      "price": 150,
      "quantity": 1,
      "manufacturingLocation": "surat",
      "presentStock": 100,
      "imageurl" : ".././assets/icecoffe.jfif"
    },
    {
      "id": 3,
      "pname": "Hot Chocolate",
      "price": 240,
      "quantity": 1,
      "manufacturingLocation": "surat",
      "presentStock": 100,
      "imageurl" : ".././assets/hot chocolate.jpg"
    },
    {
      "id": 4,
      "pname": "Double Chocolaty Chip Frappuccino",
      "price": 340,
      "quantity": 1,
      "manufacturingLocation": "surat",
      "presentStock": 100,
      "imageurl" : ".././assets/Double Chocolaty Chip Frappuccino.jpg"
    },
  ]

  imageurl = ".././assets/cr1.jpg"
  count:any="0";
  @Output() newItemevent = new EventEmitter<any>();
  addItem(product:any){
    this.newItemevent.emit(product);
    }
}
