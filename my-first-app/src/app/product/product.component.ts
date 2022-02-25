import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Output() newItemEvent=new EventEmitter();
addNewitem(){
  this.newItemEvent.emit();
}

// product_dis=false;
// productdetail(){
// if(this.product_dis==false){
//   this.product_dis=true;
// }
// else{
//   this.product_dis=false;
// }
// }
product=
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
@Output() descriptionItemEvent=new EventEmitter<any>();
addTocartevent(productData:any){
  this.descriptionItemEvent.emit(productData);
}
}
