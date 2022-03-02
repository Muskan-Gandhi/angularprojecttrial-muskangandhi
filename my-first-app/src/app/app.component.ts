import { Component } from '@angular/core';
import { DatetimeService } from './datetime.service';
import { UserInformationService } from './user-information.service';
import { Observable, Subscriber } from 'rxjs';
import { HttpDataRequestService } from './http-data-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public ht:HttpDataRequestService){
    
  }

 
  ngOnInit() { 
      this.ht.getdata().subscribe((data) => this.show(data));
      

  } 
  
  // htdata:any;
  // show(data:any){
  //   return this.htdata=data;
  //}

  //get data from json using GET
  result:any;
  show(data:any){
    this.result=data;
  }

  id='';
  name="";
  get(id:any){
    console.log(id);
    this.name=this.result[id].name;
  }
    // getdate = this.dt.today;
    // d= this.dt.daydate();
    // info = this.da.userinfo();
    
    // name="";
    // set(val:any){
    //   this.da.username=val;
    //   console.log(val);
    // }
    
    // onSubmittoform(user:any){
    //   console.log(user)
    // }
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

  //strArrays=["Jia","Muskan","Sarmistha","Ritu","Ritambhara"];
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
  // counter=0;
  // totalQuantity=0;
  // billamount=0;
  // cartItems=
  // [
  //   {
  //     "id": "",
  //     "pname": "",
  //     "price": "",
  //     "quantity": "",
  //     "manufacturingLocation": "",
  //     "presentStock": ""
  //   }
  // ]
  
  
  // addItem(item:any){
  //   this.cartItems.push(item);
  //   this.counter++;
  //   this.totalQuantity+=Number(item.quantity);
  //   this.billamount+=Number(item.quantity)*Number(item.price);
  //}

  // Task-4 (28/02/22)
  // Printing table
  // num:any = [];
  // tableof=""
  // table(){
  //   for(let i=1;i<=10;i++){
  //     this.num.push(i*Number(this.tableof));
  //   }


  //}

  // Task-5 (28/02/22)
  // Hotel Booking

  // todate:any;
  // fromdate:any;
  // to:any;
  // from:any;
  // price=500;
  // caculate(todate:any,fromdate:any){
    
  //   var tdate = new Date(this.todate);
  //   var fdate = new Date(this.fromdate);
  //   var days = (fdate.getTime() - tdate.getTime())/(1000 * 3600 * 24);
  //   var amount=this.price*days;
  //   console.log(days);
  //   console.log("Amount of "+ days +" days stay is "+amount);
  //  }



}

