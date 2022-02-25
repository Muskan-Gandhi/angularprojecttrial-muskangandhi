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
      "pname": "wheat",
      "price": 200,
      "quantity": 1,
      "manufacturingLocation": "surat",
      "presentStock": 150,
      //"imageurl" : ".././assets/icecoffe.jpg"
    },
    {
      "id": 2,
      "pname": "Rice",
      "price": 150,
      "quantity": 1,
      "manufacturingLocation": "surat",
      "presentStock": 100,
      //"imageurl" : ".././assets/icecoffe.jfif"
    },
    {
      "id": 3,
      "pname": "bread",
      "price": 40,
      "quantity": 1,
      "manufacturingLocation": "surat",
      "presentStock": 100,
      //"imageurl" : ".././assets/mocha.jfif"
    },
  ]

  imageurl = ".././assets/cr1.jpg"
  count:any="0";
  @Output() newItemevent = new EventEmitter<any>();
  addItem(product:any){
    this.newItemevent.emit(product);
    }
}
