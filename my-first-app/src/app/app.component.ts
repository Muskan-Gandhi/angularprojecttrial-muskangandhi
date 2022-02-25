import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-first-app';
  // imageUrl=".././assets/icon.jpg"
  // count=0;
  // counterval(){
  //   this.count++;
  
  // }
  // // nm=" ";
  // // name(){
  // //   this.nm="muskan";
  // // }
  // fn=" ";
  // ln="";
  // name(){
  
  // this.ln="Gandhi";
  // }
  // fname="james";
  // able=true;


//ODDEVEN
  // num=0;
// oddeven(){
// if (this.num%2==0){
// return true;
// }
// else{
//   return false;
// }
  // }

  //Print Array
  // numArrays=[1,2,3,4,5,6,7,8,9,0];
  // strArrays=["abc","bcd","wer","quyt"];

  strArrays=["Jia","Muskan","Sarmistha","Ritu","Ritambhara"];
  // data=
  // [
  //   {
  //     "id": 1,
  //     "pname": "wheat",
  //     "price": 200,
  //     "quantity": 150,
  //     "manufacturingLocation": "surat",
  //     "presentStock": 150
  //   },
  //   {
  //     "id": 2,
  //     "pname": "Rice",
  //     "price": 200,
  //     "quantity": 50,
  //     "manufacturingLocation": "surat",
  //     "presentStock": 100
  //   },
  //   {
  //     "id": 3,
  //     "pname": "bread",
  //     "price": 40,
  //     "quantity": 50,
  //     "manufacturingLocation": "surat",
  //     "presentStock": 100
  //   },
  // ]
  counter=0;
  totalQuantity=0;
  billamount=0;
  cartItems=
  [
    {
      "id": "",
      "pname": "",
      "price": "",
      "quantity": "",
      "manufacturingLocation": "",
      "presentStock": ""
    }
  ]
  

  addItem(item:any){
    this.cartItems.push(item);
    this.counter++;
    this.totalQuantity+=Number(item.quantity);
    this.billamount+=Number(item.quantity)*Number(item.price);
  }
}

